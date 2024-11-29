const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/IncidentController');  // Import controller here

// Routes using controller methods
router.get('/', incidentController.getAllIncidents);
router.post('/', incidentController.createIncident);
router.put('/:id', incidentController.updateIncident);
router.delete('/:id', incidentController.deleteIncident);

module.exports = router;
