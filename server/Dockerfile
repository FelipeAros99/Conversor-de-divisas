FROM node:16
WORKDIR /app
RUN chown node:node ./
USER node
COPY package*.json /app
RUN npm ci
COPY . /app
CMD [ "npm", "start" ]
