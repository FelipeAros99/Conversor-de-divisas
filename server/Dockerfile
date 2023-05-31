FROM node:12

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

COPY . /app
RUN npm install --force
RUN npm install nodemon 
CMD ["npm", "start"]


