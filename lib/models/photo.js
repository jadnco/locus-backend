'use strict';

import Mongoose, { Schema } from 'mongoose';

const PhotoSchema = new Schema({
  location: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
  },
  dimensions: {
    width: Number,
    height: Number,
  },
  source: String,
});

export default Mongoose.model('Photo', PhotoSchema);
