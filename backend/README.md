# Backend flask application for MELANOMA CLASSIFICATION

## Commands to run project using flask
- install pipenv to your machine using pip => pip install pipenv
  - you may need to add path to your system environment variables
- in MELANOMADETECTOR/backend run commands 
  - pipenv install
  - pipenv shell
  - flask run

## Commands to run project using docker-compose
- you need to have docker installed on our machine
- in MELANOMADETECTOR/ run commands
  - docker-compose build
  - docker-compose up
- to stop container
  - docker-compose stop
  
## Jupyter server kernel recognition
- if you want jupyter to recognize virtual environment as kernel
- in MELANOMADETECTOR/backend run commands 
  - pipenv shell
  - python -m ipykernel install --user --name=your-virtualenv-name
    - your-virtualenv-name can have any value