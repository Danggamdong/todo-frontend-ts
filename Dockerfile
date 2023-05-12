FROM node:20-alpine3.17

WORKDIR /app

COPY . /app

RUN npm install -g pnpm
RUN pnpm install && pnpm run build

ENTRYPOINT [ "pnpm", "serve" ]
