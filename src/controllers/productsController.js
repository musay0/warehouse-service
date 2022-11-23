/**
 * @file configures the product API's
 */

/**
 * Method to handle sell product API request
 *
 * @param {Object} _req  request object
 * @param {Object} res response object
 * @param {Function} _next the chained function
 */
async function sellProduct(_req, res, _next) {
  res.status(204).send();
}

/**
 * Method to handle get all products API request
 *
 * @param {Object} _req  request object
 * @param {Object} res response object
 * @param {Function} _next the chained function
 */
async function getAllProducts(_req, res, _next) {
  res.status(204).send();
}
export {
  sellProduct,
  getAllProducts,
};

