const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['Frontend', 'Backend', 'Full-Stack'],
    required: true
  },
  techStack: {
    type: [String],
    required: true
  },
  experience: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Developer', developerSchema);