const express = require('express');
const bfhlRoutes = require('./routes/bfhlRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.use('/', bfhlRoutes);

app.use(errorHandler);

module.exports = app;
