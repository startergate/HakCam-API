const express = require('express');
const router = express.Router();

router.get('/:video', (req, res, next) => {
    res.send();
});

router.get('/:video/:time', (req, res, next) => {
    res.send();
});

router.post('/:video/:time', (req, res, next) => {

});

router.put('/:video/:id', (req, res, next) => {

});

router.delete('/:video/:id', (req, res, next) => {

});

module.exports = router;
