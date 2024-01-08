# #Stage 1
# FROM node:18-alpine as builder
# WORKDIR /app
# COPY package*.json .
# COPY yarn*.lock .
# RUN yarn install
# COPY . .
# RUN yarn build

# #Stage 2
# FROM nginx:1.19.0
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


# Initial Stage
FROM node:18-alpine as builder

ENV NODE_ENV=production
WORKDIR "/app"

RUN yarn global add typescript

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

RUN yarn build

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]

# Final Stage
# FROM nginx

# EXPOSE 3000

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html