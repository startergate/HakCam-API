const sid = require('@startergate/sidjs');
const db = require('../../models/mongoConnect');

exports.authorize = (req, res, next) => {
    sid.loginAuth(req.cookies.sid_clientid, req.query.sessid).then(result => {
        req.session.sessid = result.sessid;
        req.session.pid = result.pid;
        req.session.nickname = result.nickname;
        req.session.expire = result.expire;
        db.findUser(result.pid, (err, res) => {
            if (res) {
                db.updateUser(result.pid, {
                    lastSession: result.sessid
                }, err => {
                    console.log(err);
                });
                return;
            }
            db.insertUser({
                pid: result.pid,
                lastSession: result.sessid,
                privilege: 0
            });
        });
        res.redirect(`http://localhost:3000/user/auth?sessid=${result.sessid}&pid=${result.pid}`);
    }).catch(err => {
        console.log(err);
        res.redirect('http://localhost:3000');
    });
};

exports.logout = (req, res, next) => {
    sid.logout(req.session.clientid, req.session.sessid);
    req.session.destroy(_ => {
        req.session;
    });
    res.send('<script>history.back()</script>');
};

exports.verify = (req, res, next) => {
    if (req.body.code == '123456789') {
        db.updateUser(req.body.pid, {
            privilege: 1
        });
    }
    res.end();
};

exports.getClass = (req, res, next) => {
    db.findUsersClass(req.params.pid, (err, resdb) => {
        if (err) res.sendStatus(500);
        else res.send(resdb.attend);
    })
};