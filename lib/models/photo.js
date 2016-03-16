'use strict';

import Mongoose, { Schema } from 'mongoose';

const PhotoSchema = new Schema({
  source: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

export default Mongoose.model('Photo', PhotoSchema);
