FROM node:14 as builder

WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN npm install
RUN npm run build


FROM nginx:latest
EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html