FROM node:13

COPY . /app

WORKDIR /app

RUN npm i

CMD npm run start