FROM node:current-alpine3.11
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8084
CMD [ "node", "index.js" ]