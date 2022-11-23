import {sequelize} from '../config.cjs';
import logger from '#commons/logger';
import {QueryTypes} from 'sequelize';

/**
 *
 * @return {Array} all products with their inventory and and required articles
 */
export async function getAll() {
  // TODO: avoid using raw queries and if necessary to use them,
  // then move the query to a static sql file
  const result = await sequelize.query(
      `SELECT p.*,
        json_group_array(
            json_object(
                'art_id', a.art_id,
                'name', a.name,
                'stock', a.stock,
                'amount_of', map.amount_of)
                ) AS articles
    FROM PRODUCTS AS p
        LEFT JOIN
        PRODUCT_ARTICLEs AS map ON p.p_id = map.PRODUCTPId
        LEFT JOIN
        ARTICLE_INVENTORYs AS a ON a.art_id = map.ARTICLEINVENTORYArtId
    GROUP BY p.name,
           p.p_id;`
      , {type: QueryTypes.SELECT});
  logger.info(`Found ${result.length} products`);

  if (result.length > 0) {
    result.map((r) => {
      r.articles = JSON.parse(r.articles);
    });
  }
  return result;
}

/**
 *
 * @param {String} id id of the product to fetch
 * @return {Array} all products with their inventory and and required articles
 */
export async function getById(id) {
  // TODO: avoid using raw queries and if necessary to use them,
  // then move the query to a static sql file
  const result = await sequelize.query(
      `SELECT p.*,
        json_group_array(
            json_object(
                'art_id', a.art_id,
                'name', a.name,
                'stock', a.stock,
                'amount_of', map.amount_of) ) AS articles
    FROM PRODUCTS AS p
        LEFT JOIN
        PRODUCT_ARTICLEs AS map ON p.p_id = map.PRODUCTPId
        LEFT JOIN
        ARTICLE_INVENTORYs AS a ON a.art_id = map.ARTICLEINVENTORYArtId
    where p.p_id = '${id}'
    GROUP BY p.name,
           p.p_id;`
      , {type: QueryTypes.SELECT});
  logger.info(`Found ${result.length} products`);

  if (result.length > 0) {
    result.map((r) => {
      r.articles = JSON.parse(r.articles);
    });
  }
  return result;
}
