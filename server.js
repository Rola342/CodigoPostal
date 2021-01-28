const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

const app = require('./app');
const sequelize = require('./config/db');

// Puerto por donde correrá el servidor
const PORT = process.env.PORT || 3050;

// Conexión a la base de datos
app.listen(PORT, () => {
  console.log(`Servidor corriendo en localhost:${PORT}`);

  sequelize.sync({ force: process.env.NODE_ENV !== 'develop' });
});
