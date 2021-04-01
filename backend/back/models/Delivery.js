const mongoose = require('mongoose');
const livreurrr = require('../models/Livreur');

// Livreur = require('./livreur.js');
// LivreurSchema = mongoose.model('livreur').schema;
// Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  // delivery_man: { type: String, require: true },
  // livreur: { type: mongoose.SchemaType.ObjectId, ref: 'livreurrr' },
  // livreur: [LivreurSchema],
});
module.exports = mongoose.model('delivery', schema);
