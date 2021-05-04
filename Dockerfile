FROM node:14 as builder

WORKDIR /app
COPY ./emart2-client/package*.json ./
RUN npm ci
COPY ./emart2-client .
RUN npm run install
RUN npm run build


FROM nginx:latest
EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html