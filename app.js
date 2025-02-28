var express = require('express');
var app = express();
var path = require('path')

app.get('/img/*', function(req, res) {
    console.log(req.route)
    res.sendFile(path.join(__dirname, req.path));
});

app.get('/', function(req, res) {
    console.log(req.route)
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(process.env.PORT || 8000);

