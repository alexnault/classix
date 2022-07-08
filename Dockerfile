FROM node:16.16.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY ./ ./
CMD ["npm", "run", "test"]
