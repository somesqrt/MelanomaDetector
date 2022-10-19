from . import api_v1
from flasgger import swag_from


@api_v1.route('/clasify', methods=['POST'])
@swag_from("../api_docs/v1/clasify_endpoint.yml", methods=['POST'])
def clasify():
    return 'safe'
