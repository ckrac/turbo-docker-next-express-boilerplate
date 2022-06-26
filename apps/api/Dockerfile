FROM node:18.4.0-alpine3.15

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV PORT 3000

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/src/index.js"]