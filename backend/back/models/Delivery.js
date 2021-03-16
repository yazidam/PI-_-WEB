const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
});

//************************************************************************************ */
// const schema = new mongoose.Schema({
//   first_name: { type: String, required: true },
//   last_name: { type: String, required: true },
//   phone: { type: String, required: true },
//   from: {
//     type: {
//       type: String, // Don't do { location: { type: String } }
//       enum: ['Point', 'Polygon'], // 'location.type' must be 'Point'
//       required: true,
//     },
//     coordinates: [Number],
//   },
//   to: { type: String, required: true },
// });
// schema.index({ from: '2dsphere' });

//*********************************************************************************************** */
// const exampleSchema = new mongoose.Schema({
//   location: {
//     type: {
//       type: String, // Don't do { location: { type: String } }
//       enum: ['Point'], // 'location.type' must be 'Point'
//       required: true,
//     },
//     coordinates: {
//       type: [Number],
//       required: true,
//     },
//   },
// });
module.exports = mongoose.model('delivery', schema);
