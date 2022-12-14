FROM node:14.17.3

# Create app directory
WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]