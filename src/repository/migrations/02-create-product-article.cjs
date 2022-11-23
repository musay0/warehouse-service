const { Sequelize } = require('sequelize');
const TABLE_NAME = 'PRODUCT_ARTICLE';

/**
 * @param {Object} queryInterface
 * @param {Object} Sequelize
 */
async function up({ context: queryInterface }) {
  await queryInterface.createTable(TABLE_NAME, {
    p_id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    art_id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    amount_of: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
  });
}


/**
 * @param {Object} queryInterface
 * @param {Object} _Sequelize
 */
async function down(queryInterface, _Sequelize) {
  await queryInterface.dropTable(TABLE_NAME);
}

module.exports = { up, down };