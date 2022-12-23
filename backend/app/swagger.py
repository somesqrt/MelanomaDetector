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
        'swagger': '2.0',
        'openapi': '3.0.2',
        'persistAuthorization': True,
        "static_url_path": "/flasgger_static/",
        "specs_route": "/apidocs/",
        'swagger_ui_bundle_js': 'http://melanoma.science.upjs.sk/backend/flasgger_static/swagger-ui-bundle.js',
        'swagger_ui_standalone_preset_js': 'http://melanoma.science.upjs.sk/backend/flasgger_static/swagger-ui-standalone-preset.js',
        'jquery_js': 'http://melanoma.science.upjs.sk/backend/flasgger_static/lib/jquery.min.js',
        'swagger_ui_css': 'http://melanoma.science.upjs.sk/backend/flasgger_static/swagger-ui.css',
    }
    return Swagger(app, decorators=[swagger_auth.login_required], template_file="api_docs/global_definitions.yml")