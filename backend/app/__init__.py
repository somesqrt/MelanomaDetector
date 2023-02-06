from flask import Flask, jsonify
from flask_cors import CORS
from .config import Config
from .swagger import init_swagger
import logging
from tensorflow.keras.models import load_model
model = load_model('./model/first/future-feri-30-01-2023.hdf5')
app = Flask(__name__)
from .extensions import db
from flask_migrate import Migrate
from .commands import add_specialists, add_articles, delete_articles



CORS(app)

app.config.from_object(Config)

gunicorn_error_logger = logging.getLogger('gunicorn.error')
app.logger.handlers.extend(gunicorn_error_logger.handlers)
app.logger.setLevel(logging.DEBUG)

app.logger.info(Config)

db.init_app(app)
migrate = Migrate(app, db)
init_swagger(app)
class Decorators(object):

    @staticmethod
    def fix_swagger(f):
        @wraps(f)
        def wrapped(*args, **kwargs):
            return f(*args, **kwargs)
        return wrapped

class InvalidUsage(Exception):
    status_code = 400

    def __init__(self, message, status_code=None):
        Exception.__init__(self)
        self.error_info = message
        if status_code is not None:
            self.status_code = status_code

    def to_dict(self):
        return {
            'message': self.error_info,
            'error': True
        }

@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response

decorators = Decorators()
# add command function to cli commands
app.cli.add_command(add_specialists)
app.cli.add_command(add_articles)
app.cli.add_command(delete_articles)

from .api_v1 import api_v1
app.register_blueprint(api_v1, url_prefix='/v1/')
