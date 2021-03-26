const mongoose = require('mongoose');

const schemalivreur = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  cin: { type: String, required: true },
  email: { type: String },
  password: { type: String, required: true },
  availability: { type: String, required: true },
});

module.exports = mongoose.model('livreur', schemalivreur);
