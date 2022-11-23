const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');

// const sequelize = new Sequelize('sqlite::memory:');
// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const umzug = new Umzug({
  migrations: {glob: 'src/repository/migrations/*.cjs'},
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({sequelize}),
});

/**
   * @return migartion response
   */
async function migrate() {
  return umzug.up();
}

module.exports = {
  sequelize, migrate
};
