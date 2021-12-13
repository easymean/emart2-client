FROM node:14 as builder
WORKDIR /app/front
COPY emart2-front/package*.json .
RUN npm ci
COPY emart2-front/ .
RUN npm install
RUN npm run build

FROM builder as builder1
WORKDIR /app/bos
COPY emart2-admin/package*.json .
RUN npm ci
COPY emart2-admin/ .
RUN npm install
RUN npm run build

FROM nginx:alpine
EXPOSE 80
COPY --from=builder /app/front/dist /usr/share/nginx/html/front
COPY --from=builder1 /app/bos/dist /usr/share/nginx/html/bos
