/**
 * @file configures the health api
 */

/**
 * Method to handle healt api request
 *
 * @param {Object} _req  request object
 * @param {Object} res response object
 * @param {Function} _next the chained function
 */
async function getStatus(_req, res, _next) {
  res.status(200).send({status: 'UP'});
}

export {
  getStatus,
};
