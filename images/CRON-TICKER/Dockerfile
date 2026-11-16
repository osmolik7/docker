# /app / usr /lib
FROM node:22.23.5-alpine3.24 as deps
# cd app
WORKDIR /app
# Destination /app
COPY package.json ./
# Install dependencies
RUN npm install


FROM node:22.23.5-alpine3.24 as builder
# cd app
WORKDIR /app
# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy all documentos dont exlude in .dockerignore
COPY . .
# Realize testing
RUN npm run test


FROM node:22.23.5-alpine3.24 as pro-deps
# cd app
WORKDIR /app
# Copy package.json
COPY package.json ./
# Install only production dependencies
RUN npm install --only=production


FROM node:22.23.5-alpine3.24 as runner
# cd app
WORKDIR /app
# Copy all necessary documents
COPY  --from=pro-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
# Execute the application
CMD ["node", "app.js"]