FROM nginx

# removendo a configuraçao padrão
RUN rm /etc/nginx/conf.d/default.conf

# copiando a configuração que vamos criar
COPY ./default.conf /etc/nginx/conf.d/default.conf