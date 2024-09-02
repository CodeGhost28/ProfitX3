const express = require('express');
const router = express.Router();
const signalController = require('../controllers/signalController');

router.post('/generate', signalController.generateSignal);

module.exports = router;
