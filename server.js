const chalk = require('chalk');
const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

const app = require('./app');
const sequelize = require('./config/db');
const migrate = require('./bootstrap/migrate');

// Puerto por donde correrá el servidor
const port = process.env.PORT || 3050;

if (process.env.MIGRATE === 'true') {
  migrate('zip-codes/aguascalientes.csv');
}

// Conexión a la base de datos
app.listen(port, async () => {
  console.log('\n');
  console.log(
    chalk.blue.bold('==================== SERVER ===================='),
  );
  console.log(
    chalk.blue.bold(`--- Servidor corriendo en el puerto ${port} ----`),
  );
  console.log(
    chalk.blue.bold('==================== SERVER ===================='),
  );
  console.log('\n');

  try {
    await sequelize.authenticate();
    console.log('\n');
    console.log(
      chalk.green('==================== MARIADB ===================='),
    );
    console.log(chalk.green('MARIADB::CONNECT::Conexión hecha con éxito'));
    console.log(
      chalk.green('==================== MARIADB ===================='),
    );
    console.log('\n');

    if (['development', 'test'].includes(process.env.NODE_ENV)) {
      sequelize.sync({ force: true });
    }

    sequelize.sync();
  } catch (error) {
    console.log('ERROR::MARIADB::Conexión hecha con éxito');
    console.log('\n');
    console.log(chalk.red('==================== MARIADB ===================='));
    console.log(chalk.red('MARIADB::ERROR::Hubo un error al conectar'));
    console.log(chalk.red(error));
    console.log(chalk.red('==================== MARIADB ===================='));
    console.log('\n');
  }
});
