const express = require('express');
const controller = require('./class.controller');
const router = express.Router();

router.all('/:class/add', controller.add);

router.post('/create', controller.create);

router.post('/:class/lecture', controller.addLecture);

router.get('/:class', controller.classIndex);

module.exports = router;