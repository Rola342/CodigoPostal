const { Sequelize } = require('sequelize');
const chalk = require('chalk');

const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

module.exports = async () => {
  const sequelize = new Sequelize({
    dialect: 'mariadb',
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    await sequelize.authenticate();
    console.log(
      chalk.green(
        'MARIADB:::CONNECT:::Connection has been established successfully.',
      ),
    );
  } catch (error) {
    console.error(chalk.red(`MARIADB:::Error:::${error}.`));
  }
};
