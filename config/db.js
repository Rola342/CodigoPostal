const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mariadb',
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

module.exports = sequelize;
