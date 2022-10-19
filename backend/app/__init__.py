from flask import Flask
from flask_cors import CORS
from .config import Config
from .swagger import init_swagger
import logging
app = Flask(__name__)


CORS(app)

app.config.from_object(Config)

gunicorn_error_logger = logging.getLogger('gunicorn.error')
app.logger.handlers.extend(gunicorn_error_logger.handlers)
app.logger.setLevel(logging.DEBUG)

app.logger.info(Config)

init_swagger(app)
class Decorators(object):

    @staticmethod
    def fix_swagger(f):
        @wraps(f)
        def wrapped(*args, **kwargs):
            return f(*args, **kwargs)
        return wrapped


decorators = Decorators()

from .api_v1 import api_v1
app.register_blueprint(api_v1, url_prefix='/v1/')
