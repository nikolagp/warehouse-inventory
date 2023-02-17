const express = require('express');
const router = express.Router();
const { Products } = require('../models');
const { validateToken } = require('../middleWare/AuthMiddleware');

router.get('/', async (req, res) => {
  const listOfProducts = await Products.findAll();
  res.json(listOfProducts);
});

router.get('/byId/:id', async (req, res) => {
  const id = req.params.id;
  const products = await Products.findByPk(id);
  res.json(products);
});

router.post('/', validateToken, async (req, res) => {
  const product = req.body;
  product.username = req.user.username;
  product.UserId = req.user.id;
  await Products.create(product);
  res.json(product);
});

router.delete('/:productId', validateToken, async (req, res) => {
  const productId = req.params.productId;
  await Products.destroy({
    where: {
      id: productId,
    },
  });

  res.json('DELETED SUCCESSFULLY');
});

module.exports = router;
