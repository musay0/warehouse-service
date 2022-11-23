/**
 * @file business logic implementation for the API's
 * TODO: try doing this via interfaces
 */

import logger from '#commons/logger';
import * as productQueries from '#repository/queries/products';
import * as articleQueries from '#repository/queries/articles';

/**
 * @return {Array} all products
 */
async function getAll() {
  const result = await productQueries.getAll();
  return result;
}

/**
 * checks if stock is more than required amount
 *
 * @param {*} article
 * @return {Boolean}
 */
const isInvalid = (article) => {
  const result = article.amount_of > article.stock;
  logger.debug(`result[${result}] for ` + JSON.stringify(article));
  return result;
};

/**
 * Performs deletion of the resorces used for the product
 *
 * @param {*} product
 */
const performDelete = async (product) => {
  // FIXME: Do not delete the product from product table
  // const count = await Product.destroy({
  //   where: {p_id: product.p_id},
  // });
  const articlesToUpdate = [];
  product.articles.forEach((el) => {
    articlesToUpdate.push({
      art_id: el.art_id,
      stock: (el.stock - el.amount_of),
    });
  });
  await articleQueries.updateStock(articlesToUpdate);
  logger.info(`Deleted articles for product[${product.p_id}]`);
};


/**
 * logic to sell the products
 *
 * @param {String} id for product to sell
 */
async function sell(id) {
  let inStock = false;
  const result = await productQueries.getById(id);

  if (result.length > 0) {
    // check if stock and required amount is available
    inStock = result[0].articles.some(isInvalid);
  }
  if (inStock) {
    throw Error('product not in stock');
  }
  await performDelete(result[0]);
}

export {
  sell,
  getAll,
};
