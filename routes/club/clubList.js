const clubList = {
    // club list
    list : (req, res) => {
        // res.send('club list');
        res.render('club/clubList', {data : 'testData list ejs'});
    }
};

module.exports = clubList;