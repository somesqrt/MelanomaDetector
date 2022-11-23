from app.models.specialist import SpecialistModel
from app.models.article import ArticleModel
import json
import click
from flask.cli import with_appcontext
from .extensions import db
# create command function


@click.command(name='add_specialists')
@with_appcontext
def add_specialists():
    if len(SpecialistModel.query.all()):
        print('alreadey loaded specialists')
        return
    keys = [
        'clinics',
        'doctor',
        'web',
        'mail',
        'phone',
        'city',
        'street',
        'floor',
        'postal_code',
        'longitude',
        'latitude',
        'private',
        'working_hours',
        'online_reservation',
        'health_insurance',
    ]
    f = open('data/specialists.json', encoding='utf-8')
    data = json.load(f)
    specialists = []
    for specialist in data['specialists_KE']:
        database_specialist = SpecialistModel()
        for key in keys:
            value = specialist.get(key, None)
            database_specialist[key] = value

        specialists.append(database_specialist)
        print('created ' + str(specialist.get('clinics', None)))

    for specialist in data['specialists_PO']:
        database_specialist = SpecialistModel()
        for key in keys:
            value = specialist.get(key, None)
            database_specialist[key] = value

        specialists.append(database_specialist)
        print('created ' + str(specialist.get('clinics', None)))

    db.session.add_all(specialists)
    db.session.commit()
    print('added all specialists')


@click.command(name='add_articles')
@with_appcontext
def add_articles():
    if len(ArticleModel.query.all()):
        print('alreadey loaded articles')
        return
    keys = [
        'language',
        'source',
        'url_source',
        'date',
        'authors',
        'category',
        'html_content'
    ]
    f = open('data/data_melanoma.json', encoding='utf-8')
    data = json.load(f)
    articles = []
    for article in data['Melanoma_info']:
        database_article = ArticleModel(title=article['title'], content=article['content'])
        for key in keys:
            value = article.get(key, None)
            database_article[key] = value

        articles.append(database_article)
        print('created ' + str(article.get('title', None)))
        db.session.add(database_article)
        db.session.commit() 


    print('added all articles')
