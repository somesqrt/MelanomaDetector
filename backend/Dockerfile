FROM python:3.10-buster

RUN apt-get update && apt-get -qq -y install build-essential ffmpeg libsm6 libxext6  -y

# Add Tini
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

# Setup flask application
WORKDIR /deploy

ADD requirements.txt ./
RUN pip install -r requirements.txt

ADD . .

# default Tini startup
ENTRYPOINT ["make", "/tini", "--"]

# Run your program under Tini
# CMD ["run"]