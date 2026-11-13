FROM node:22.23.5-alpine3.24

WORKDIR /app

COPY package.json app.js ./

COPY tasks/ ./tasks/

RUN npm install

CMD ["node", "app.js"]