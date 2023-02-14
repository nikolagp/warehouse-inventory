const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://nikwarehouse.vercel.app'],
    credentials: true,
  })
);

const db = require('./models');

// Routers
const productRouter = require('./routes/productsRoute');
app.use('/products', productRouter);

const usersRouter = require('./routes/usersRoute');
app.use('/auth', usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server works again!');
  });
});
