const express = require('express');
const router = express.Router();

/**
 *  실제 업무처리 로직이 명시된 router import
 */
const clubList = require('./clubList');
const clubDetail = require('./clubDetail');

/**
 *  clubList 출력 담당자 A
 */
router.get('/list', (req, res) => {
    clubList.list(req, res);
});

/**
 *  clubDetail 담당자 B
 */
router.get('/detail/:clubSn', (req, res) => {
     clubDetail.detail(req, res);
});

module.exports = router;