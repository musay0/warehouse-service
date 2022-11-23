import {sequelize}  from '../config.cjs';
import logger from '#commons/logger';
import {QueryTypes} from 'sequelize';

export async function getAll() {
    const result = await sequelize.query(
        `SELECT p.*,
        json_group_array(json_object('art_id', a.art_id, 'name', a.name, 'stock', a.stock, 'amount_of', map.amount_of) ) AS articles
    FROM PRODUCTS AS p
        LEFT JOIN
        PRODUCT_ARTICLEs AS map ON p.p_id = map.PRODUCTPId
        LEFT JOIN
        ARTICLE_INVENTORYs AS a ON a.art_id = map.ARTICLEINVENTORYArtId
    GROUP BY p.name,
           p.p_id;`
        , { type: QueryTypes.SELECT });
        logger.info(`Found ${result.length} products`);
    
        if(result.length > 0 ) {
        result.map(r => {r.articles = JSON.parse(r.articles)})
      }
    return result;
}