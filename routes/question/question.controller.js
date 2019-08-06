const db = require('../../models/mongoConnect');

exports.findAll = (req, res, next) => {
    db.findQuestion(req.params.video, -1, (err, resdb) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        console.log(resdb);
        res.send(resdb);
    });
};

exports.findSome = (req, res, next) => {
    db.findQuestion(req.params.video, req.params.time, (err, resdb) => {
        if (err) res.sendStatus(500);
        else res.send(resdb);
    })
};

exports.insertQuestion = (req, res, next) => {
    db.insertQuestion(req.params.video, req.params.time, req.body.question, (err) => {
        if (err) res.sendStatus(500);
        else res.sendStatus(200);
    });
};

exports.insertAnswer = (req, res, next) => {
    db.insertAnswer(req.params.video, req.params.id, req.body.answer, (err) => {
        if (err) res.sendStatus(500);
        else res.sendStatus(200);
    });
};

exports.deleteQuestion = (req, res, next) => {
    db.deleteQuestion(req.params.video, req.params.id, (err) => {
        if (err) res.sendStatus(500);
        else res.sendStatus(200);
    })
}