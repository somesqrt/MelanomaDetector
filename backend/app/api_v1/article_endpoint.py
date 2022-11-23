from . import api_v1
from flasgger import swag_from
from flask import request
from app import InvalidUsage
# import random
from app.models.article import ArticleModel
from app.models.specialist import SpecialistModel


@api_v1.route('/article', methods=['GET'])
@swag_from("../api_docs/v1/article_endppints/articles.yml", methods=['GET'])
def articles():
    articles = ArticleModel.query.order_by('id').all()
    articles = [article.serialize_general() for article in articles]
    return {'data': articles}


@api_v1.route('/article/<string:Slug>', methods=['GET'])
@swag_from("../api_docs/v1/article_endppints/article.yml", methods=['GET'])
def article(Slug):
    article = ArticleModel.query.filter(ArticleModel.slug == Slug).first()
    if article is None:
        raise InvalidUsage('invalid_slug', status_code=400)
    article = article.serialize_all()
    return article
