FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app
COPY . /app
CMD ["npm", "install" , "--force"]

RUN npm run build
