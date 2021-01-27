const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

const app = require('./app');
const db = require('./config/db');

// Puerto por donde correrá el servidor
const PORT = process.env.PORT || 3050;

// Conexión a la base de datos
db();

app.listen(PORT, () => console.log(`Servidor corriendo en localhost:${PORT}`));
