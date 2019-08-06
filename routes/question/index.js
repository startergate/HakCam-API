const express = require('express');
const controller = require('./question.controller');
const router = express.Router();

router.get('/:video/all', controller.findAll);

router.get('/:video/:time', controller.findSome);

router.post('/:video/:time', controller.insertQuestion);

router.put('/:video/:id/answer', controller.insertAnswer);

router.delete('/:video/:id', controller.deleteQuestion);

module.exports = router;
