# warehouse-service

warehouse-service is a nodejs-express app with implementation of warehouse REST API. 
The app is based on a relational database where Product and Articles have Many-to-Many relation.<br />
For routing: The open-api spec yaml plugs to the express server and handles the routing, enabling spec driven development in the future.

Prerequisites
 - [Node v18.* (LTS)](https://nodejs.org/en/blog/release/v18.12.0/) the current LTS node engine.
 - [yarn 1.22.*](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## Developer notes (Also check build and run section below)
- External properties
  - currently maintained via `.env` file at root
- Starting the app
  - Please see build and run section below or scripts under `package.json`
- API documentation
  - Open api spec is used and [localhost-swagger-ui](http://localhost/docs) will be automatically available on app start
- Persistence storage
  - Currently sqlite db writing to the local file is used, for quick setup/ dev
  - On first boot, the data in docs\inventory.json and docs\products.json will be loaded
  - To reset the data delete the database.sqlite and start server again
  - We definetly need to move to a hosted DB before releasing
- Source documentation
  - JSdoc is linted and can be exported
  - Code needs more documentations
- Unit tests
  - Tests not implemented yet but in future scope
- ESM and commonjs
  - had to use commonjs in places as the ORM(sequilize) was not compatible with ESM
  - ORM configs can be optimized

## Build Setup
### using node locally
``` bash
# Install dependencies
yarn install

# Run the application locally
yarn dev

# Run the application (NODE_ENV=devevlopment,test,prod)
yarn start

# Lint the JavaScript
yarn lint

# Lint the JavaScript and fix errors
yarn lint:fix
```

## Deployment
The application can be packaged as a docker image, but had some license issues so couldnt test it

## Source Structure
```
      .
      |-.env                      # environment variables
      |-docs                      # docs and data to seed
      |-src                       # source of course
      | |-index.js                # startup scripts
      | |-api
      | | |-oas-file.yaml         # api specs and routing
      | |-commons
      | | |-logger.js             # logger
      | |-controllers             # controllers for routers
      | |-services                # business logic invoke by controller
      | |-middlewares             # middlewares for the request response processing
      | |-repository              # storage related modules
      | | |-migrations            # generated tables here
      | | |-models                # logical models for the ORM
      | | |-queries               # raw queries or wrappers for ORM
      | | |-seeders               # data is seeded from here

 
```