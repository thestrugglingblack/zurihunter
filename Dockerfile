FROM node:23

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 1992

CMD ["node", "server.js"]