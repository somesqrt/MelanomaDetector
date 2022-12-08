from . import api_v1
from flasgger import swag_from
from flask import request
from app import InvalidUsage
# import random
from app.models.specialist import SpecialistModel


@api_v1.route('/specialist', methods=['GET'])
@swag_from("../api_docs/v1/specialist.yml", methods=['GET'])
def specialist():
    specialists = SpecialistModel.query.order_by('id').all()
    specialists = [specialist.serialize_all() for specialist in specialists]
    return {'data': specialists}

