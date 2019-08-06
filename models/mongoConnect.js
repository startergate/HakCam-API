/*jshint esversion: 9 */

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoUser = require('../modules/userGetter');

const url = `mongodb://${mongoUser.id}:${mongoUser.pw}@54.180.27.126:27017`;
// Database Name
var db;
const dbName = 'hakcam';

MongoClient.connect(url, {
    useNewUrlParser: true
}).then(client => {
    db = client.db(dbName);
    db.class = db.collection('class');
    db.user = db.collection('user');
    db.question = db.collection('question');
}).catch(err => {
    throw err;
});

exports.findQuestion = (lid, time, callback) => {
    db.question.find({
        lid: lid,
        $lte: {
            time: time
        }
    }, callback);
};

exports.insertQuestion = (time, time, callback) => {
    db.question.find({
        lid: lid,
        $lte: {
            time: time
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

exports.addLike = (sessid, docs, callback) => {
    let doc = {};
    doc['liked.' + Object.keys(docs)[0]] = docs[Object.keys(docs)[0]];
    console.log(doc);
    db.user.updateOne({
        lastSession: sessid
    }, {
        $push: doc
    }, callback);
};

exports.removeLike = (sessid, docs, callback) => {
    let doc = {};
    doc['liked.' + Object.keys(docs)[0]] = docs[Object.keys(docs)[0]];
    console.log(doc);
    db.user.updateOne({
        lastSession: sessid
    }, {
        $unset: doc
    }, callback);
};