FROM node:22.13.1-alpine AS dev
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
CMD [ "yarn", "start:dev" ]

FROM node:22.13.1-alpine AS dev-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:22.13.1-alpine AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build

FROM node:22.13.1-alpine AS prod-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

FROM node:22.13.1-alpine AS prod
EXPOSE 3000
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]
