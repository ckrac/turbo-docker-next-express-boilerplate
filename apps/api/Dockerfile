FROM node:16.15-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 3000

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]