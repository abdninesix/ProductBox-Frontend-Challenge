var debug = require('debug')('frontend-code-challenge');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('./lib/logger');

var items = require('./routes/items');

var app = express();
var log = logger(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Register API routes BEFORE serving frontend
app.use('/items', items);
app.use('/img', express.static(path.join(__dirname, 'static/img')));

//Serve frontend from Vite build folder
app.use(express.static(path.join(__dirname, '../client/dist')));

//Handle React routing (Frontend)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

//Error Handling for 404 (Not Found)
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Global Error Handler
app.use(function(err, req, res, next) {
    log.error(err);
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

//Start the server
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    console.log(`Backend running at http://localhost:${server.address().port}`);
});
