'use strict';

import Mongoose, { Schema } from 'mongoose';
import User from './user';

const SpotSchema = new Schema({
  hasPhoto: Boolean,

  // URL reference to the image on the machine/server
  photo: String,
  url: String,
  viewsCount: {
    type: Number,
    default: 0,
  },
  likesCount: {
    type: Number,
    default: 0,
  },

  // A reference to the likes model
  likes: {
    type: Schema.Types.ObjectId,
    ref: 'Likes',
  },
  modified: Date,
  car: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
  },

  // Mongo expects an embedded array
  spotter: [User],
  created: {
    type: Date,
    default: Date.now,
  },
});

export default Mongoose.model('Spot', SpotSchema);
