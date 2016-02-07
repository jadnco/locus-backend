// User model
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  firstName: String,
  lastName: String,
  fullName: String,
  email: String,
  joined: {
    type: Date,
    default: Date.now,
  },
  handle: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
