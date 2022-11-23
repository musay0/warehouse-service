/**
 * @file configures the product API's
 */
import * as productService from '#services/productService';

/**
 * Method to handle sell product API request
 *
 * @param {Object} req  request object
 * @param {Object} res response object
 * @param {Function} _next the chained function
 */
async function sell(req, res, _next) {
  const productId = req.params?.productId;
  const product = await productService.deleteById(productId);
  res.status(204).send();
}

/**
 * Method to handle get all products API request
 *
 * @param {Object} _req  request object
 * @param {Object} res response object
 * @param {Function} _next the chained function
 */
async function getAll(_req, res, _next) {
  const result = await productService.getAll();
  res.status(200).send(result);
}
export {
  sell,
  getAll,
};

