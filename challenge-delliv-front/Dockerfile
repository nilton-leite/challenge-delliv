# Initial Stage
FROM node:18-alpine as builder

ENV NODE_ENV=production

RUN yarn global add typescript

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

RUN yarn build

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]