FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app
COPY . /app
RUN npm install --force
CMD ["npm", "start"]

