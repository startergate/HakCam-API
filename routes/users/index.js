const express = require('express');
const sid = require('@startergate/sidjs');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.post('/add/:user/:class', (req, res, next) => {

});

router.post('/verify', (req, res, next) => {

});

router.get('/auth', (req, res, next) => {
    sid.loginAuth(req.cookies.sid_clientid, req.query.sessid).then(result => {
        req.session.sessid = result.sessid;
        req.session.pid = result.pid;
        req.session.nickname = result.nickname;
        req.session.expire = result.expire;

        res.redirect('/');
    }).catch(err => {
        console.log(err);
        res.redirect('/');
    });
});

router.get('/logout', (req, res, next) => {
    sid.logout(req.session.clientid, req.session.sessid);
    req.session.destroy(_ => {
        req.session;
    });
    res.send('<script>history.back()</script>');
});

module.exports = router;
