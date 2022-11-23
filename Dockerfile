FROM node:lts-alpine@sha256:9eff44230b2fdcca57a73b8f908c8029e72d24dd05cac5339c79d3 as base
ENV NODE_ENV production
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# copying packages first helps take advantage of docker layers
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production --frozen-lockfile && yarn cache clean

FROM base as dev
# Bundle app source
COPY src ./src
COPY api ./api

EXPOSE 8080

CMD [ "yarn", "run", "start" ]