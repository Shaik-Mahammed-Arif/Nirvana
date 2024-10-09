const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client_detailsController');

// Make sure this is set to POST
router.post('/enrollClient', clientController.enrollClient);

module.exports = router;
