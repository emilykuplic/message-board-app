var express = require('express');
var router = express.Router();
var Rent = require('../models/messageboard.schema.js');

router.get('/', function(req, res) {
  // find (select) all documents in our collection
  Message.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      // res.send(result.rows)
    }
  });
});

router.post('/', function(req, res) {
  console.log('log the data: ', req.body);

  // create an object instance from messageboard schema
  var addMessage = new Message(req.body);
  // insert into our collection
  addMessage.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});


module.exports = router;
