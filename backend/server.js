const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const productRouter = require('./routes/Products');
app.use('/products', productRouter);

const usersRouter = require('./routes/Users');
app.use('/auth', usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server works again!');
  });
});
