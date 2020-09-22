const express = require('express');
const db = require('mysql');
const router = express.Router();
const dbconfig = require('../config/database');
const conn = dbconfig.init();
dbconfig.connect(conn);

router.get('/admin', (req, res) => {
    res.render('user/admin');    
});

router.post('/register', function(req, res) {
    const reqBody = req.body;
    console.log('reqbody: ', reqBody);
    const insertData = [
        reqBody.name,
        reqBody.age,
        reqBody.email
    ];
    const sql = 'INSERT INTO USER (name, age, email) VALUES (?, ?, ?)';
    conn.query(sql, insertData, function(err, results) {
        if(err) console.log(err);
        console.log('input id is...' + results);
    });
    res.redirect('/user/list');
});

router.get('/list', function(req, res) {
    var sql = "SELECT * FROM USER";
    conn.query(sql, (error, results) => {
        if(error) {
            console.log("에러\n", error);
        }
        console.log("결과\n", results);
        res.render('user/userList', {userList:results});
    });
});


module.exports = router;