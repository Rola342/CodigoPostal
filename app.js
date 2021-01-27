const express = require('express');
const app = express();

const cors = require('cors');

// Cargamos las rutas
const zipCodesRoutes = require('./src/routes/zip-codes');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Rutas
app.use('/zip-codes', zipCodesRoutes);

module.exports = app;
