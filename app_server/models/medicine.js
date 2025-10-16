const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dosage: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, default: 'upcoming' },
  createdOn: { type: Date, default: Date.now }
});

mongoose.model('Medicine', medicineSchema);