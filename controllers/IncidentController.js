// Correctly import the model as 'Incident'
const Incident = require('../Models/Incident.model');  // Note the uppercase 'I'

// Get all incidents
exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();  // Correctly use 'Incident' here
    res.status(200).json(incidents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new incident
exports.createIncident = async (req, res) => {
  try {
    const newIncident = new Incident(req.body);
    const savedIncident = await newIncident.save();
    res.status(201).json(savedIncident);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an incident
exports.updateIncident = async (req, res) => {
  try {
    const updatedIncident = await Incident.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedIncident);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an incident
exports.deleteIncident = async (req, res) => {
  try {
    await Incident.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Incident deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
