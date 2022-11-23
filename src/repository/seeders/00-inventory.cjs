const seedArticles = require('../../../docs/inventory.json');

const TABLE_NAME = 'ARTICLE_INVENTORYs';

module.exports = {
  async up ({ context: queryInterface }) {
     await queryInterface.bulkInsert(TABLE_NAME, seedArticles.inventory);
  },

  async down ({ context: queryInterface }) {
    await queryInterface.bulkDelete(TABLE_NAME, null, {});
  }
};