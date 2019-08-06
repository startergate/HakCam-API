const db = require('../../models/mongoConnect');

exports.classIndex = (req, res, next) => {
    db.findClass(req.params.class, (err, resdb) => {
        res.send(resdb);
    });
};

exports.create = (req, res, next) => {
    db.createClass(req.body.pid, req.body.title, err => {
        if (err) res.sendStatus(400);
        else res.sendStatus(200);
    });
}

exports.add = (req, res, next) => {
    db.addClass(req.body.pid, req.params.class, err => {
        if (err) res.sendStatus(400);
        else res.sendStatus(200);
    });
};

exports.addLecture = (req, res, next) => {
    db.addLecture(req.body.pid, req.params.cid, err => {
        if (err) res.sendStatus(400);
        else res.sendStatus(200);
    })
}