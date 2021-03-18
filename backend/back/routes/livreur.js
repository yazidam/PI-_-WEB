var express = require('express');
const Livreur = require('../models/Livreur');
var router = express.Router();

router.post('/add', async function (req, res, next) {
  const tablivreur = new Livreur(req.body);
  await tablivreur.save();
  res.send({ data: tablivreur });
});

router.get('/all', async function (req, res, next) {
  const tablivreur = await Livreur.find();
  res.send({ data: tablivreur });
});

router.get('/livreur/:id', async (req, res, next) => {
  try {
    const tablivreur = await Livreur.findById(req.params.id);
    res.send({ data: tablivreur });
  } catch (error) {
    res.status(404).send({ error: 'delivery man not found try again' });
  }
});

router.delete('/livreur/:id', async (req, res, next) => {
  try {
    const tablivreur = await Livreur.findById(req.params.id);
    await tablivreur.remove();
    res.send({ data: true });
  } catch (error) {
    res.status(404).send({ error: 'delivery man not found try again' });
  }
});

router.patch('/livreur/:id', async (req, res, next) => {
  try {
    const tablivreur = await Livreur.findById(req.params.id);
    Object.assign(tablivreur, req.body);
    tablivreur.save();
    res.send({ data: tablivreur });
  } catch (error) {
    res.status(404).send({ error: 'delivery not found try again' });
  }
});

module.exports = router;
