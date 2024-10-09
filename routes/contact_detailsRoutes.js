const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact_detailsController'); // Correct path to controller

// Route for contact form submission
router.post('/submitContact', contactController.submitContact);

module.exports = router;
