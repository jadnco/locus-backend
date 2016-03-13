'use strict';

import Mongoose, { Schema } from 'mongoose';

const PhotoSchema = new Schema({
  location: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
  },
  source: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

export default Mongoose.model('Photo', PhotoSchema);
