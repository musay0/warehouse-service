/**
 * @file implementation for the API's
 */

import Product from '#repository/models/product';
import logger from '#commons/logger';
import * as productQueries from '#repository/queries/products';

async function getAll() {
  const result = await productQueries.getAll();
  return result;
}

async function deleteById(id) {
  const count = await Product.destroy({
    where: {p_id: id},
  });
  logger.info(`Deleted ${count} product with id ${id}`);
  if (count === 0) {
    throw Error('Not found');
  }
  return count;
}

export {
  getAll,
  deleteById,
};
