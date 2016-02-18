'use strict';

import Mongoose, { Schema } from 'mongoose';

const CarSchema = new Schema({
  year: Number,
  stats: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

export default Mongoose.model('Car', CarSchema);
