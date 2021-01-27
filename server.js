const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

const app = require('./app');

// Puerto por donde correrá el servidor
const PORT = process.env.PORT || 3050;

(async function testConnection() {
  const sequelize = new Sequelize({
    dialect: 'mariadb',
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.listen(PORT, () => console.log(`Servidor corriendo en localhost:${PORT}`));
