FROM node:22.13.1-alpine AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile

FROM node:22.13.1-alpine as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM nginx:1.23.3 as production
EXPOSE 80
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
COPY assets ./assets
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
