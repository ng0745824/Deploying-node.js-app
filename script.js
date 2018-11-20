var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.listen(PORT);