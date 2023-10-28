require('dotenv').config();
require('./src/config/db');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const router = require('./src/api/routes/index');
const { setError } = require('./src/config/error');

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    }
  })
);

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 50,
  standardHeaders: false,
  legacyHeaders: false
});

app.use(limiter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.disable('x-powered-by');

app.use('/api', router, (req, res) => {
  res.status(200).json({
    info: 'Coffee Store API',
    coffees: '/api/coffees',
    varieties: '/api/varieties'
  });
});

app.use('*', (req, res, next) => {
  return next(setError(404, 'Not found'));
});

app.use((error, req, res) => {
  return res.status(error.status || 500).json(error.message || { data: 'Internal Server Error' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`>> Server running on: http://localhost:${PORT}`);
});
