const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
  area: Number,
  floors: Number,
  foundation: String,
  wallMaterial: String,
  roofType: String,
  additionalOptions: String,
  totalCost: Number,
  breakdown: Object
});

module.exports = mongoose.model('Calculation', calculationSchema);