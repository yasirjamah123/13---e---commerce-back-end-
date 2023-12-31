require('dotenv').config();

const Sequelize = require('sequelize');

try {
  const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
        },
      });

  module.exports = sequelize;

  // Test the connection
  sequelize.authenticate()
    .then(() => {
      console.log('Connection to the database has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err.message);
    });
} catch (error) {
  console.error('Error during Sequelize initialization:', error.message);
}
