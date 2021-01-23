var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 8000);

app.get('/', function(req, res) {
    res.send('Hello World');
})