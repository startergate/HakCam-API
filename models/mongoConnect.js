/*jshint esversion: 9 */

const MongoClient = require('mongodb').MongoClient;
const random = require('random-unified');
const assert = require('assert');
const mongoUser = require('../modules/userGetter');

const url = `mongodb://${mongoUser.id}:${mongoUser.pw}@54.180.27.126:27017`;
// Database Name
let db;
const dbName = 'hakcam';

MongoClient.connect(url, {
    useNewUrlParser: true
}).then(client => {
    db = client.db(dbName);
    db.class = db.collection('class');
    db.user = db.collection('user');
    db.question = db.collection('question');
    db.lecture = db.collection('lecture');
}).catch(err => {
    throw err;
});

exports.findClass = (cid, callback) => {
    db.lecture.find({
        cid: cid
    }, {
        projection: {
            _id: 0
        }
    }).toArray(callback);
};

exports.createClass = (pid, title, callback) => {
    db.user.findOne({
        pid: pid
    }, {
        projection: {
            privilege: 1
        }
    }, (err, resdb) => {
        if (!resdb) {
            callback('failed');
            return;
        }
        db.class.insertOne({
            cid: random.crypto(10),
            title: title,
            pid: pid
        }, callback);
    })
};

exports.addClass = (pid, cid, callback) => {
    db.class.findOne({
        cid: cid
    }, (err, resdb) => {
        if ((!resdb)) {
            callback('failed');
            return;
        }
        db.user.findOne({
            pid: pid
        }, {
            projection: {
                attend: 1
            }
        }, (err, resdb) => {
            if (err || resdb.attend.indexOf(cid) !== -1) {
                callback('failed');
                return;
            }
            else db.user.updateOne({
                pid: pid
            }, {
                $push: {
                    attend: cid
                }
            }, callback)
        });
    });
};

exports.findQuestion = (lid, time, callback) => {
    if (time == -1) time = 99999999;
    db.question.find({
        lid: lid,
        time: {
            $lte: time
        }
    }, {
        projection: {
            _id: 0
        }
    }).toArray(callback);
};

exports.insertQuestion = (lid, time, question, callback) => {
    db.question.insertOne({
        lid: lid,
        qid: random.crypto(10),
        question: question,
        answer: undefined,
        time: time
    }, callback);
};

exports.deleteQuestion = (lid, qid, callback) => {
    db.question.deleteOne({
        lid: lid,
        qid: qid
    }, callback);
};

exports.insertAnswer = (lid, qid, answer, callback) => {
    db.question.updateOne({
        lid: lid,
        qid: qid
    }, {
        $set: {
            answer: answer
        }
    }, callback);
};

exports.findUser = (pid, callback) => {
    db.user.findOne({
        pid: pid
    }, callback);
};

exports.insertUser = (docs, callback) => {
    db.user.insertOne(docs, callback);
};

exports.updateUser = (pid, docs, callback) => {
    db.user.updateOne({
        pid: pid
    }, {
        $set: docs
    }, callback);
};