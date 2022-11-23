const { Sequelize } = require('sequelize');

const TABLE_NAME = 'PRODUCT';

/**
 * @param {Object} queryInterface
 * @param {Object} Sequelize
 */
async function up({ context: queryInterface }) {
  await queryInterface.createTable(TABLE_NAME, {
    product_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
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