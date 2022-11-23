const { Sequelize } = require('sequelize');

const TABLE_NAME = 'ARTICLE_INVENTORY';

/**
 * @param {Object} queryInterface
 * @param {Object} Sequelize
 */
async function up({ context: queryInterface }) {
  await queryInterface.createTable(TABLE_NAME, {
    art_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    stock: {
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