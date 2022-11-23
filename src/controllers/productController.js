/**
 * @file configures the product API's
 */
import * as productService from '#services/productService';
import {errorHandler} from '#middlewares/responseHeaders';

/**
 * Method to handle sell product API request
 *
 * @param {Object} req  request object
 * @param {Object} res response object
 * @param {Function} _next the chained function
 */
async function sell(req, res, _next) {
  try {
    const productId = req.params?.productId;
    await productService.sell(productId);
    res.status(204).send();
  } catch (e) {
    errorHandler(e, req, res);
  }
}

/**
 * Method to handle get all products API request
 *
 * @param {Object} _req  request object
 * @param {Object} res response object
 * @param {Function} _next the chained function
 */
async function getAll(_req, res, _next) {
  try {
    const result = await productService.getAll();
    res.status(200).send(result);
  } catch (e) {
    errorHandler(e, _req, res);
  }
}
export {
  sell,
  getAll,
};

