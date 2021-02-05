const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

module.exports = () => {
  // Nos conectamos a las base de datos en mongo
  return new Promise((resolve, reject) => {
    mongoose.connect(
      process.env.NODE_ENV === 'development'
        ? process.env.MONGO_DB_URI_DEV
        : process.env.MONGO_DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      },
    );

    // Solo se ejecuta cuando hay un error
    mongoose.connection.on('error', (err) => reject(err));

    // Se ejecuta cuando se ha conectado correctamente
    mongoose.connection.on('connected', () => resolve());
  });
};
