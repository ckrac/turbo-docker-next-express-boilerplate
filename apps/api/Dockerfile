FROM node:18.4.0-alpine3.15 as development

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

FROM node:18.4.0-alpine3.15 as production

WORKDIR /app

COPY package*.json ./

RUN yarn install --prod=true

COPY --from=development /app/dist/src ./dist/src

EXPOSE 3000

CMD ["node", "dist/src/index.js"]