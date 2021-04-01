const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  delivery_man: { type: String, require: true },
});

module.exports = mongoose.model('Admindelivery', schema);
