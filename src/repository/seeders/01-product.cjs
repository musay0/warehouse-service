const getUuid = require('uuid-by-string');
const seedProducts = require('../../../docs/products.json');

const TABLE_NAME = 'PRODUCTs';
const MAPPING_TABLE_NAME = 'PRODUCT_ARTICLEs';

function productArticleInventory() {
  const products = [];
  const productArticles = [];
  seedProducts.products.forEach(p => {
    const pId = getUuid(p.name);
    products.push({
      p_id: pId,
      name: p.name
    });

    articles = p.contain_articles.map(article => {
      article.PRODUCTPId = pId;
      article.ARTICLEINVENTORYArtId = article.art_id;
      delete article.art_id;

      delete article.name;
      return article;
    });
    productArticles.push(...articles);
  });

  return {products, productArticles};
}

module.exports = {
  async up ({ context: queryInterface }) {
     const inventory =  productArticleInventory();
     await queryInterface.bulkInsert(TABLE_NAME, inventory.products);
     await queryInterface.bulkInsert(MAPPING_TABLE_NAME, inventory.productArticles);
  },

  async down ({ context: queryInterface }) {
    await queryInterface.bulkDelete(TABLE_NAME, null, {});
    await queryInterface.bulkDelete(MAPPING_TABLE_NAME, null, {});
  }
};