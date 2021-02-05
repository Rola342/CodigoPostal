const express = require('express');
const expressWinston = require('express-winston');
const winston = require('winston');
const app = express();

const cors = require('cors');

// Cargamos las rutas
const zipCodesRoutes = require('./src/routes/zip-codes');
const populationsRoutes = require('./src/routes/populations');

// Definimos un separador para el logger
const separator = '\n========================\n';

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Logger
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json(),
      winston.format.simple(),
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: `${separator}HTTP:::{{req.method}} {{req.url}}${separator}`,
    colorize: true,
    ignoreRoute: () => {
      return false;
    },
  }),
);

// Rutas
app.use('/zip-codes', zipCodesRoutes);
app.use('/populations', populationsRoutes);

module.exports = app;
