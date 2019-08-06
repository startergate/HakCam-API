const express = require('express');
const controller = require('./books.controller');
const router = express.Router();

router.all('/:keyword', controller.getBooked);

module.exports = router;