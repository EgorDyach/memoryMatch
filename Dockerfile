# Используйте официальный образ Node.js как базовый
FROM node:20.15.0 as build

# Установите рабочий каталог в контейнере
WORKDIR /app

# Копируйте файлы package.json и package-lock.json
COPY ./frontend/ .

RUN npm install && npm run build

FROM nginx:alpine

COPY --from=build /app/dist /app
COPY ./frontend/default.conf /etc/nginx/conf.d/default.conf
