var express = require('express');
var app = express();
var path = require('path')

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('/index.html');
})

app.listen(process.env.PORT || 8000);

