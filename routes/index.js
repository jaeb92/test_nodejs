const express = require('express');
const router = express.Router();

// 라우터의 get()함수를 이용해 request URL('/')에 대한 업무처리 로직 정의
router.get('/', (req, res, next) => {
    res.send('index page');
});

// 모듈에 등록해야 app.js에서 app.use함수를 통해 사용 가능
module.exports = router;