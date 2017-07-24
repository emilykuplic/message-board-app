var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index.js');
var messageboard = require('./routes/messageboard.js');
var mongoose = require('mongoose');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/messageboard', messageboard);
app.use('/', index);

/** -------- MONGOOSE CONNECTION --------**/
var databaseUrl = 'mongodb://localhost:27017/antares';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to : ', databaseUrl);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});



/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 7500);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
