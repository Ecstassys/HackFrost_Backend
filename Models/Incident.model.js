const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Incident title is required'],
  },
  description: {
    type: String,
    required: [true, 'Incident description is required'],
  },
  status: {
    type: String,
    default: 'Open',
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium',
  },
}, { timestamps: true });

module.exports = mongoose.model('Incident', incidentSchema);
