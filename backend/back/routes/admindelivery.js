var express = require('express');
const Admindel = require('../models/Admindelivery');
var router = express.Router();
const Delivery = require('../models/Delivery');

router.get('/all', async function (req, res, next) {
  const admintab = await Admindel.find();
  res.send({ data: admintab });
});

router.post('/add', async function (req, res, next) {
  const admintab = new Admindel(req.body);
  await admintab.save();
  res.send({ data: admintab });
});
router.delete('/admindev/:id', async (req, res, next) => {
  try {
    const admintab = await Admindel.findById(req.params.id);
    await admintab.remove();
    res.send({ data: true });
  } catch (error) {
    res.status(404).send({ error: 'delivery not found try again' });
  }
});
// router.patch('/admindel/:id', async (req, res, next) => {
//   try {
//     const admintab = await Delivery.findById(req.params.id);
//     // const devv1 = await Admindel.findById(req.params.id);
//     Object.assign(devv, req.body);
//     devv.save();
//     res.send({ data: devv });
//   } catch (error) {
//     res.status(404).send({ error: 'delivery not found try again' });
//   }
// });
module.exports = router;
