FROM node:14 as builder
WORKDIR /app/emart2-front
COPY emart2-front/package*.json .
RUN npm ci
COPY emart2-front/ .
RUN npm install
RUN npm run build

FROM builder as builder1
WORKDIR /app/emart2-admin
COPY emart2-admin/package*.json .
RUN npm ci
COPY emart2-admin/ .
RUN npm install
RUN npm run build

FROM nginx:alpine
EXPOSE 80
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/emart2-front/dist /usr/share/nginx/html/emart2-front
COPY --from=builder1 /app/emart2-admin/dist /usr/share/nginx/html/emart2-admin
