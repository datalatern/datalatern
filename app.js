var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('underscore');
// app.use(express.static('public'));
// console.log(path);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'trunk')))
app.get('/index', function(req, res) {
});
app.listen(8000);
