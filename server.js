const chalk = require('chalk');
const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

const app = require('./app');
// const sequelize = require('./config/db');
const dbConnect = require('./db/connect');
const migrate = require('./bootstrap/migrate');

// Puerto por donde correrá el servidor
const port = process.env.PORT || 3050;

// Conexión a la base de datos
app.listen(port, () => {
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

  // Función que maneja las conexiones
  dbConnect()
    .then(async () => {
      console.log('\n');
      console.log(
        chalk.blue('==================== MONGO ===================='),
      );
      console.log(chalk.blue('MONGO::CONNECT::Conexión hecha con éxito'));
      console.log(
        chalk.blue('==================== MONGO ===================='),
      );
      console.log('\n');

      if (process.env.MIGRATE === 'true') {
        await migrate('./zip-codes');
      }
    })
    .catch((error) => {
      console.log(chalk.red('MONGODB::ERROR::'));
      console.log(chalk.red(error));
    });
});
