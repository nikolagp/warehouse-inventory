const express = require('express');
const router = express.Router();
const { Products } = require('../models');

router.get('/', async (req, res) => {
  const listOfProducts = await Products.findAll();
  res.json(listOfProducts);
});

router.get('/byId/:id', async (req, res) => {
  const id = req.params.id;
  const products = await Products.findByPk(id);
  res.json(products);
});

router.post('/', async (req, res) => {
  const product = req.body;
  await Products.create(product);
  res.json(product);
});

module.exports = router;
