FROM --platform=linux/amd64 ubuntu:latest
#FROM ubuntu:latest
LABEL Description="Build environment"

RUN apt-get update && \
	apt-get install -y curl &&\
	curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs &&\
	npm install -g @angular/cli@latest\
	npm install -g json-server

EXPOSE 4200 3000

WORKDIR /src