'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SpotSchema = new Schema({
  hasPhoto: Boolean,
  photo: String,
  car:{
    type: Schema.Types.ObjectId,
    ref: 'Car',
  },
  spotter: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Spot', SpotSchema);
