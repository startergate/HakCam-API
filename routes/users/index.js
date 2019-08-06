const express = require('express');
const controller = require('./users.controller');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.post('/add/:user/:class', (req, res, next) => {

});

router.post('/verify', (req, res, next) => {

});

router.get('/auth', controller.authorize);

router.get('/logout', controller.logout);

module.exports = router;
