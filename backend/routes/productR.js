const express = require('express');
const router = express.Router();
const { Products } = require('../models');
const { validateToken } = require('../middleWare/AuthMiddleware');
const jwt = require('jsonwebtoken');

// const verify = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const token = authHeader.split(' ')[1];

//     jwt.verify(token, 'importantsecret', (err, data) => {
//       if (err) {
//         return res.status(403).json('Toekn is not valid');
//       }

//       req.data = data;
//       next();
//     });
//   } else {
//     res.status(401).json('You are not authenticated!');
//   }
// };

// function auth(req, res, next) {
//   const accessToken = req.headers.authorization;
//   if (!accessToken) {
//     return res.status(401).json({ message: 'Access token missing' });
//   }
//   try {
//     const decoded = jwt.verify(accessToken, 'importantsecret');
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(403).json({ message: 'Invalid access token' });
//   }
// }

// router.post('/', async (req, res) => {
//   const product = req.body;
//   await Products.create(product);
//   res.json(product);
// });

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

router.delete('/:productId', async (req, res) => {
  const productId = req.params.productId;
  await Products.destroy({
    where: {
      id: productId,
    },
  });

  res.json('DELETED SUCCESSFULLY');
});

module.exports = router;
