FROM node:16
WORKDIR /app
RUN pwd
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]