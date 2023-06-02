FROM node:12
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
COPY . /app
RUN npm install cors --save
RUN npm install
EXPOSE 8080
CMD [ "node", "server.js" ]