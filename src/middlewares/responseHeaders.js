/**
 * @file contains middlewares to decorate the responses
 *   or handling errors before it goes out to the world
 */
import logger from '#commons/logger';

/**
 * Response headers middleware
 *
 * @param {Object} _req
 * @param {Object} res
 * @param {Object} next
 * */
export function responseHeaders(_req, res, next) {
  res.set('Content-Type', 'application/json');
  next();
}

/**
 * Error handler middleware
 *
 * @param {Object} err
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 **/
export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  logger.error(`${statusCode} ${err.message} ${err.stack}`);
  res.status(statusCode).send({status: err.message});
  return;
}
