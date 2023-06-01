FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app
COPY . /app
RUN npm install --force
CMD ["npm", "start"]

<<<<<<< HEAD

CMD [ "npm", "build"]
CMD ["npm", "start"]
=======
>>>>>>> a4c408190f8fcb93407acbbc6f7cc6278859ade7
