FROM node:12

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

COPY . /app
CMD ["npm", "install", "--force"]
RUN npm install 
RUN npm install nodemon --save-dev



