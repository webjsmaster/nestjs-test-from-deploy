FROM node:18.6-alpine

WORKDIR /usr/app

COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./

RUN yarn install

# RUN npm i nodemon -g

RUN yarn build

COPY . .

EXPOSE 3000

# RUN npm run migration:generate

CMD  ["yarn", "start"]