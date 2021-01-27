const express = require('express');
const router = express.Router();

// Controladores
const zipCodesControllers = require('../controllers/zip-codes');

// Obtiene todos los códicos postales
router.get('/', zipCodesControllers.getAll);

// Obtiene la información de un código postal
router.get('/:zipCode', zipCodesControllers.getOne);

module.exports = router;
