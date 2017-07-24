var express = require('express');
var router = express.Router();
var Rent = require('../models/messageboard.schema.js');

router.get('/', function(req, res) {
  // find (select) all documents in our collection
  Rent.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      // res.send(result.rows)
    }
  });
});
module.exports = router;
