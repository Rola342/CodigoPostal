const express = require('express');
const app = express();

const cors = require('cors');

// Cargamos las rutas
const zipCodesRoutes = require('./src/routes/zip-codes');
const populationsRoutes = require('./src/routes/populations');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Rutas
app.use('/zip-codes', zipCodesRoutes);
app.use('/populations', populationsRoutes);

module.exports = app;
