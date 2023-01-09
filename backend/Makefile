SHELL=/bin/bash

upgrade:
	flask db upgrade

run:
	flask run -p 8000 -h 0.0.0.0

install:
	pip install -r requirements.txt

gunicorn:
	gunicorn --config /deploy/gunicorn_config.py --log-config /deploy/gunicorn_logging.conf --reload app:app

add_specialists:
	flask add_specialists

add_articles:
	flask add_articles

delete_articles:
	flask delete_articles