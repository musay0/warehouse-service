const { Sequelize } = require('sequelize');
const TABLE_NAME = 'PRODUCT_ARTICLEs';

/**
 * @param {Object} queryInterface
 * @param {Object} Sequelize
 */
async function up({ context: queryInterface }) {
  await queryInterface.createTable(TABLE_NAME, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    PRODUCTPId: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    ARTICLEINVENTORYArtId: {
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