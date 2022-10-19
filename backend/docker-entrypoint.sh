#!/bin/bash
flask run --host=0.0.0.0
# start gunicorn
gunicorn --config /deploy/gunicorn_config.py --log-config /deploy/gunicorn_logging.conf --reload app:app