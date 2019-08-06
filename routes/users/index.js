const express = require('express');
const controller = require('./users.controller');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.get('/:pid/myclass', controller.getClass);

router.post('/verify', controller.verify);

router.get('/auth', controller.authorize);

router.get('/logout', controller.logout);

module.exports = router;
