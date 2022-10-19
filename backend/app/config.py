import os


class Config(object):
    FLASK_DEBUG = os.getenv("FLASK_DEBUG")
    TESTING = os.getenv("TESTING")
    SECRET_KEY = os.getenv("SECRET_KEY")
    CSRF_ENABLED = os.getenv("CSRF_ENABLED")
    SWAGGER_USERNAME = os.getenv("SWAGGER_USERNAME")
    SWAGGER_PASSWORD = os.getenv("SWAGGER_PASSWORD")
    DEVELOPMENT = True
