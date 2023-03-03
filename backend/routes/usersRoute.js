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

    const hash = await bcrypt.hash(password, 10);

    await Users.create({
      username: username,
      password: hash,
    });
    res.json(username);
    return;
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

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      res.json({ error: 'Wrong Username And Password Combination' });
      return;
    } else {
      const accessToken = sign(
        { username: user.username, id: user.id },
        'importantsecret'
      );
      // res.status(200).json({ accessToken: accessToken });
      res.json({
        accessToken: accessToken,
        name: user.username,
        id: user.id,
      });
      return;
    }
  } catch (err) {
    console.error(err);
  }
});

router.get('/auth', validateToken, (req, res) => {
  res.json(req.user);
});

// router.get('/jwt', validateToken, (req, res) => {
//   res.json(req.user);
// });

module.exports = router;
