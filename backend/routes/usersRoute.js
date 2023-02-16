const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const { validateToken } = require('../middleWare/AuthMiddleware');
const bcrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ where: { username: username } });

    if (user) {
      res.json({ error: 'User Already Exists' });
      return;
    }

    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        username: username,
        password: hash,
      });
      res.json('SUCCESS');
    });
  } catch (err) {
    console.error(err);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ where: { username: username } });

    if (!user) {
      res.json({ error: "User Doesn't Exist" });
      return;
    }

    bcrypt.compare(password, user.password).then((match) => {
      if (!match)
        res.json({ error: 'Wrong Username And Password Combination' });
      const accessToken = sign(
        { username: user.username, id: user.id },
        'importantsecret'
      );
      // res.json('accessToken', accessToken);
      // res.status(200).json({ accessToken: accessToken });
      res.json({ accessToken: accessToken, name: user.username, id: user.id });
      return;
    });
  } catch (err) {
    console.error(err);
  }
});

router.get('/jwt', validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
