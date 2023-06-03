FROM node:16
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
COPY . /app
RUN npm install cors --save
RUN npm install
EXPOSE 8080
CMD [ "npm", "run" ,"dev"]