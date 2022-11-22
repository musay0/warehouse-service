/**
 * @file configures the oas tools and router
 */

import {initialize} from '@oas-tools/core';
import logger from '#commons/logger';

const oasToolsConfig = {
  middleware: {
    router: {
      controllers: './src/controllers',
    },
  },
  logger: {customLogger: logger},
  docs: false,
  strict: true,
  router: true,
  validator: true,
};

/**
  * setup oas middleware
  *
  * @param {Object} app express app instance
  */
async function oasMiddleware(app) {
  await initialize(app, oasToolsConfig);
}

export default oasMiddleware;

