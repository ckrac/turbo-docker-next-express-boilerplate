FROM node:16.15-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV PORT 3000

RUN yarn run build

EXPOSE 3000

CMD ["node", "dist/index.js"]