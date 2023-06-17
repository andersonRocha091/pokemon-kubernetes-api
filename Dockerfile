FROM node:20-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY ./src /app/src
ENTRYPOINT ["node","./src/app.js"]