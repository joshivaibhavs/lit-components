FROM node:latest

WORKDIR /projects/app

COPY ./package.json /projects/app

COPY ./yarn.lock /projects/app/

RUN "yarn"

COPY . .

EXPOSE 8080

CMD [ "yarn", "webpack", "serve" ]
