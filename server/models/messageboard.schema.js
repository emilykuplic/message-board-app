var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var messageSchema = new Schema({
  userName: {type: String, required: true, unique: true},
  userMessage: {type: String, required: true}
});

// export our model
module.exports = mongoose.model('Message', messageSchema);
