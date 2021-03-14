var express = require('express');
const Delivery = require('../models/Delivery');
var router = express.Router();

router.post('/add', async function (req, res, next) {
  const devv = new Delivery(req.body);
  await devv.save();
  res.send({ data: devv });
});

router.get('/all', async function (req, res, next) {
  const devv = await Delivery.find();
  res.send({ data: devv });
});

router.get('/dev/:id', async (req, res, next) => {
  try {
    const devv = await Delivery.findById(req.params.id);
    res.send({ data: devv });
  } catch (error) {
    res.status(404).send({ error: 'delivery not found try again' });
  }
});

router.delete('/dev/:id', async (req, res, next) => {
  try {
    const devv = await Delivery.findById(req.params.id);
    await devv.remove();
    res.send({ data: true });
  } catch (error) {
    res.status(404).send({ error: 'delivery not found try again' });
  }
});

router.patch('/dev/:id', async (req, res, next) => {
  try {
    const devv = await Delivery.findById(req.params.id);
    Object.assign(devv, req.body);
    devv.save();
    res.send({ data: devv });
  } catch (error) {
    res.status(404).send({ error: 'delivery not found try again' });
  }
});

module.exports = router;
