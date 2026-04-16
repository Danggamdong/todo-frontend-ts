FROM node:20-alpine3.17

WORKDIR /app

COPY . /app

RUN npm install -g pnpm
RUN pnpm install --prod && pnpm build

ENTRYPOINT [ "pnpm", "serve" ]
