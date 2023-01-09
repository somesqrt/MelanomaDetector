from app.extensions import db
from slugify import slugify


class ArticleModel(db.Model):
    __tablename__ = 'article'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    language = db.Column(db.String())
    source = db.Column(db.String())
    image = db.Column(db.String())
    url_source = db.Column(db.String())
    date = db.Column(db.String())
    authors = db.Column(db.String())
    category = db.Column(db.String())
    content = db.Column(db.String())
    short_description = db.Column(db.String())
    html_content = db.Column(db.String())
    slug = db.Column(db.String(), unique=True)

    def __init__(self, *args, **kwargs):
        if not 'slug' in kwargs:
            kwargs['slug'] = slugify(kwargs.get('title', ''))
        if not 'short_description' in kwargs:
            value = " ".join(kwargs.get('content', '').split()[:50])
            kwargs['short_description'] = value
        super().__init__(*args, **kwargs)

    def serialize_general(self):
        return {
            'id': self.id,
            'title': self.title,
            'slug': self.slug,
            'short_description': self.short_description,
            'image': self.image
        }

    def serialize_all(self):
        return {
            'id': self.id,
            'title': self.title,
            'language': self.language,
            'source': self.source,
            'url_source': self.url_source,
            'date': self.date,
            'authors': self.authors,
            'category': self.category,
            'short_description': self.short_description,
            'html_content': self.html_content,
            'slug': self.slug,
            'image': self.image
        }

    def __setitem__(self, key, value):
        setattr(self, key, value)
