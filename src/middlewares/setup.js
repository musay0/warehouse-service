/**
 * @file configures all the middlewares
 */

import logger from '#commons/logger';
import express from 'express';
import oasMiddleware from '#middlewares/oasTools';
import {errorHandler} from '#middlewares/responseHeaders';

// list all the middlewares to apply centrally
const MIDDLEWARE_QUEUE = [
  express.json(), // parses incoming requests with JSON payloads
  errorHandler,
];

/**
 * function to setup all the middlewares
 *
 * @param {Object} app express app instance
 */
export default async function setupMiddlewares(app) {
  app.disable('x-powered-by');
  MIDDLEWARE_QUEUE.map((m) => app.use(m));
  await oasMiddleware(app);
  logger.info('setup middleware done');
}
