FROM node:12-alpine as builder

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install --only=prod

COPY . /app

RUN npm run build

FROM nginx:1.16.0-alpine as nginx

COPY nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
