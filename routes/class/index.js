const express = require('express');
const controller = require('./class.controller');
const router = express.Router();

router.post('/:class/add', controller.add);

router.post('/create', controller.create);

router.get('/:class', controller.classIndex);

module.exports = router;