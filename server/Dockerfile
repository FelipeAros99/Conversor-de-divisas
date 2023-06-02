FROM node:12
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
COPY . /app
RUN npm install
RUN npm ci --omit=dev

EXPOSE 8080
CMD [ "node", "server.js" ]