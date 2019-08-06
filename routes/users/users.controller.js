const sid = require('@startergate/sidjs');

exports.authorize = (req, res, next) => {
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
};

exports.logout = (req, res, next) => {
    sid.logout(req.session.clientid, req.session.sessid);
    req.session.destroy(_ => {
        req.session;
    });
    res.send('<script>history.back()</script>');
};