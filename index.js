const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const homeRouter = require('./routes/home');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// Routes
app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);

// Port Setting
const port = 3000;
app.listen(port, () => {
    console.log("SERVER ON ", port);
});