'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StatsSchema = new Schema({
  msrp: Number,
  topSpeed: Number,
});

module.exports = mongoose.model('Stats', StatsSchema);
