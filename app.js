var express = require('express');
var app = express();
var path = require('path')

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/img/Asteroid1.png'));
    res.sendFile(path.join(__dirname + '/img/Asteroid2.png'));
    res.sendFile(path.join(__dirname + '/img/Background.png'));
    res.sendFile(path.join(__dirname + '/img/Rocket1.png'));
    res.sendFile(path.join(__dirname + '/img/Rocket1Boost.png'));
    res.sendFile(path.join(__dirname + '/img/Satellite1.png'));
    res.sendFile(path.join(__dirname + '/img/SpacemanJL.png'));
    res.sendFile(path.join(__dirname + '/img/SpacemanJR.png'));
    res.sendFile(path.join(__dirname + '/img/SpacemanL.png'));
    res.sendFile(path.join(__dirname + '/img/SpacemanR.png'));
})

app.listen(process.env.PORT || 8000);

