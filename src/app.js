const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const cors = require('cors');
require('./app/helper/db');

const { PORT } = require('./app/config');
const studentRouter = require('./app/routes/student.route');

// ***************************************************************
// constants

const app = express();

// ***************************************************************
// app config

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ***************************************************************
// app routes

app.use('/student', studentRouter);

// ***************************************************************
// error handling

app.use(async (req, res, next) => {
  next(createError.NotFound(`${req.path}`));
});

app.use((err, req, res, next) => {
  const STATUS = 500;
  const MESSAGE = 'Internal Server Error';
  res.status(err.status || STATUS);
  res.send({
    error: {
      status: err.status || STATUS,
      message: err.message || MESSAGE,
    },
  });
});

// ***************************************************************
// application server

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
