'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CarSchema = new Schema({
  year: Number,
  stats: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Car', CarSchema);
