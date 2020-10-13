# use base Node.js image from Docker Hub
FROM node:12
EXPOSE 8080
WORKDIR /usr/src/app
COPY package*.json ./
# install required libraries (MongoDB client, Express)
RUN npm install mongodb express woodside-nodejs-sampleapp
COPY . .
CMD [ "node", "main.js"]
