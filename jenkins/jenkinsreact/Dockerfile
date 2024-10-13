FROM nginx:1.27.0-alpine-slim

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx" , "-g", "daemon off;" ]