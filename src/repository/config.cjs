const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');

// const sequelize = new Sequelize('sqlite::memory:');
// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const migrator = new Umzug({
  migrations: {glob: 'src/repository/migrations/*.cjs'},
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({sequelize}),
});

/**
   * @return migartion response
   */
async function migrate() {
  return migrator.up();
}

const seeder = new Umzug({
	migrations: {
		glob: ['src/repository/seeders/*.cjs'],
	},
	context: sequelize.getQueryInterface(),
	storage: new SequelizeStorage({
		sequelize,
		modelName: 'seeder_meta',
	}),
	logger: console,
});

async function seed() {
  return seeder.up();
}

module.exports = {
  sequelize, migrate, seed
};
