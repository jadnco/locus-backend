'use strict';

import Mongoose, { Schema } from 'mongoose';
import User from './user';

const SpotSchema = new Schema({

  // This should be one of:
  // - photo: When there is a single photo available
  // - video: When a single video is available
  // - mixed: When there is at least on photo and one video
  // - location: When there is no media, should display a map view.
  type: String,

  title: String,
  caption: String,
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
  location: {
    latitude: {
      type: Number,
      default: 0,
    },
    longitude: {
      type: Number,
      default: 0,
    },
    altitude: {
      type: Number,
      default: 0,
    },
    accuracy: {
      type: Number,
      default: 0,
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
});

export default Mongoose.model('Spot', SpotSchema);
