const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: [String]
});

module.exports = mongoose.model('Service', serviceSchema);
