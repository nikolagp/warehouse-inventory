const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { validateToken } = require('./middleWare/AuthMiddleware');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
app.use(cookieParser());

const db = require('./models');

// Routers
const productRouter = require('./routes/productsRoute');
app.use('/products', productRouter);

const usersRouter = require('./routes/usersRoute');

app.use('/auth', validateToken, usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server works again!');
  });
});
