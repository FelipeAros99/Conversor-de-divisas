FROM node:12

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

COPY . /app

RUN npm install 
RUN npm install nodemon --save-dev

CMD ["npm", "install"]

