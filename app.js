const express = require('express');
const http = require('http');
const app = express();
const path = require('path');

// routes module
const indexRouter = require('./routes');
const clubRouter = require('./routes/club/club');

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port' + app.get('port'));
});

// request 요청 URL과 처리 로직을 선언한 라우팅 모듈 매핑
app.use('/', indexRouter);
app.use('/club', clubRouter);    //클럽
