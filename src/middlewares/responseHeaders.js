/**
 * @file contains middlewares to decorate the responses
 *   or handling errors before it goes out to the world
 */

/**
 * Response headers middleware
 *
 * @param {Object} _req
 * @param {Object} res
 * @param {Object} next
 * */
export default function responseHeaders(_req, res, next) {
  res.set('Content-Type', 'application/json');
  next();
}
