const express = require('express');
const controller = require('./index.controller');
const router = express.Router();

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
