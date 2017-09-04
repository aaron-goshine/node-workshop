// routes/api/index.js
'use strict';

const express = require('express');
const router = express.Router();
const pr = require('./pr');

module.exports = () => {
  router.use('/pr', pr());
  return router;
};
