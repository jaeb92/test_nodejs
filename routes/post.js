const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database');
const conn = dbconfig.init();
dbconfig.connect(conn);

router.get('/list', function(req, res) {
    var sql = "SELECT * FROM POST";
    conn.query(sql, (error, results) => {
        if(error) {
            console.log("에러\n", error);
        }
        console.log("결과\n", results);
        res.render('post/postList', {postList:results});
    });
});

router.get('/write', function(req, res) {
    res.render('post/postWrite');
});

router.post('/write', function(req, res) {

})

module.exports = router;