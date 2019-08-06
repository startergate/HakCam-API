const express = require('express');
const controller = require('./class.controller');
const router = express.Router();

router.get('/:class/add', (req, res, next) => {

});

router.post('/create', (req, res, next) => {

});

router.get('/:class', controller.classIndex);

module.exports = router;