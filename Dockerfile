# Build stage
FROM node:lts-alpine as build

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

# Runtime stage
FROM node:lts-alpine as runtime

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --prod

# Production stage
FROM node:lts-alpine

WORKDIR /app

COPY --from=build /app/__sapper__ ./__sapper__
COPY --from=build /app/static ./static
COPY --from=runtime /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "__sapper__/build"]