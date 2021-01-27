const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

const app = require('./app');

// Puerto por donde correrá el servidor
const PORT = process.env.PORT || 3050;

app.listen(PORT, () => console.log(`Servidor corriendo en localhost:${PORT}`));
