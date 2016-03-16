'use strict';

import Mongoose, { Schema } from 'mongoose';

const PhotoSchema = new Schema({
  location: {
    latitude: {
      type: Number,
      default: '',
    },
    longitude: {
      type: Number,
      default: '',
    },
    altitude: {
      type: Number,
      default: '',
    },
    accuracy: {
      type: Number,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    country: {
      type: String,
      default: '',
    },
  },
  source: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

export default Mongoose.model('Photo', PhotoSchema);
