const express = require('express');
const router = express.Router();

// Controladores
const populationsControllers = require('../controllers/populations');

// Crea una población
router.post('/', populationsControllers.create);

module.exports = router;
