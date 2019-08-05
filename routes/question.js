const express = require('express');
const router = express.Router();

router.get('/:video', (req, res, next) => {
    res.send();
});

router.get('/:video/:time', (req, res, next) => {
    res.send();
});

module.exports = router;
