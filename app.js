var express = require('express');
var app = express();
var path = require('path')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/img/SpacemanL.png', function(req, res) {
    res.sendFile(path.join(__dirname));
});

app.listen(process.env.PORT || 8000);

