const express = require('express');
const router = express.Router();

router.get('/:video/all', (req, res, next) => {
    res.send(); // 질문 객체 배열 전송
});

router.get('/:video/:time', (req, res, next) => {
    res.send(); // 질문 객체 배열 전송
});

router.post('/:video/:time', (req, res, next) => {
    res.send(); // 질문 객체 전송
});

router.put('/:video/:id', (req, res, next) => {
    res.send(); //질문 객체 전송
});

router.delete('/:video/:id', (req, res, next) => {
    res.send(); // 삭제 성공 여부 전송
});

module.exports = router;
