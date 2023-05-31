FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app
COPY yarn.lock /app
COPY . /app

RUN yarn install
RUN npm run build
CMD ["npm", "install"]