FROM node:16.1

WORKDIR /app

COPY package*.json ./

RUN NODE_ENV=development npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]