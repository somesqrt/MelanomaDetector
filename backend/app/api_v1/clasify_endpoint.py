from . import api_v1
from flasgger import swag_from
from flask import request
from app import InvalidUsage
import random


@api_v1.route('/clasify', methods=['POST'])
@swag_from("../api_docs/v1/clasify_endpoint.yml", methods=['POST'])
def clasify():
    if 'file' not in request.files:
        raise InvalidUsage('no_file', status_code=400)
    respone = random.choice(['benign', 'malign'])
    return {'result': respone}
