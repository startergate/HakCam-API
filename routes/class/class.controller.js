const db = require('../../models/mongoConnect');

exports.classIndex = (req, res, next) => {
    db.findClass(req.params.class, (err, resdb) => {
        res.send(resdb);
    });
};

exports.create = (req, res, next) => {
    //db.
}