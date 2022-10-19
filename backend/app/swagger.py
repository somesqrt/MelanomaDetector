from flasgger import Swagger
from flask_httpauth import HTTPBasicAuth

def init_swagger(app):

    swagger_auth = HTTPBasicAuth()

    @swagger_auth.verify_password
    def swagger_verify_password(username, password):
        if username == app.config['SWAGGER_USERNAME'] and password == app.config['SWAGGER_PASSWORD']:
            return True
        return False

    app.config['SWAGGER'] = {
        'title': 'MELANOMA CLASSIFICATION API',
        'uiversion': 3,
        'openapi': '3.0.2',
        'persistAuthorization': True,
    }
    return Swagger(app, decorators=[swagger_auth.login_required], template_file="api_docs/global_definitions.yml")