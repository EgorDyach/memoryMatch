FROM node:20.15.0 as build

WORKDIR /app

COPY ./frontend/ .

RUN npm install && npm run build

FROM nginx:alpine

COPY --from=build /app/dist /app
COPY ./frontend/default.conf /etc/nginx/conf.d/default.conf
