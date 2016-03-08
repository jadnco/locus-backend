'use strict';

import Mongoose, { Schema } from 'mongoose';
import User from './user';

const SpotSchema = new Schema({

  // This should be one of:
  // - Photo: When there is a single photo available
  // - Video: When a single video is available
  // - Mixed: When there is at least on photo and one video
  // - Map: When there is no media, should display a map view.
  type: String,

  title: String,
  description: String,
  photo: {
    type: Schema.Types.ObjectId,
    ref: 'Photo',
  },
  url: String,
  viewsCount: {
    type: Number,
    default: 0,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
  commentsCount: {
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
  spotter: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default Mongoose.model('Spot', SpotSchema);
