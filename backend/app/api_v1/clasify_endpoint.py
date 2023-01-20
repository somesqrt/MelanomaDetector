from . import api_v1
from flasgger import swag_from
from flask import request
from app import InvalidUsage
# import random
import numpy as np
import base64
import cv2
from app import model


def readb64(uri):
    encoded_data = uri.split(',')[1]
    nparr = np.fromstring(base64.b64decode(encoded_data), np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return img


@api_v1.route('/clasify', methods=['POST'])
@swag_from("../api_docs/v1/clasify_endpoint.yml", methods=['POST'])
def clasify():
    if 'file' not in request.files:
        raise InvalidUsage('no_file', status_code=400)
    filestr = request.files["file"]
    file_bytes = np.fromfile(filestr, np.uint8)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    # print(img)
    img = cv2.resize(img, (256, 256)).reshape((256, 256, 3))
    result = model.predict(np.array([img]))
    # print(result[0])
    index = np.argmax(result[0])
    responses = ['benign', 'malign']
    # respone = random.choice()
    # percentage = random.uniform(0.00, 98.50)
    return {
        'result': responses[index],
        'percentage': float(max(result[0]) * 100)
    }
