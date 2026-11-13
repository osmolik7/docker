# /app / usr /lib
FROM --platform=$BUILDPLATFORM node:22.23.5-alpine3.24

# cd app
WORKDIR /app

# Destination /app
COPY package.json ./

# Install dependencies
RUN npm install

# Destination /app
COPY . .

# Realize testing
RUN npm run test

# Delete files and directories not necessary for production
RUN rm -rf tests && rm -rf node_modules

##Install production dependencies
RUN npm install --only=production

CMD ["node", "app.js"]