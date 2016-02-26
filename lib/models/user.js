'use strict';

import Mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  description: String,
  location: String,
  spots: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Spot',
    },
  ],

  // A reference to the followers model
  followers: {
    type: Schema.Types.ObjectId,
    ref: 'Followers',
  },
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  likesCount: {
    type: Number,
    default: 0,
  },
  followersCount: {
    type: Number,
    default: 0,
  },
  followingCount: {
    type: Number,
    default: 0,
  },
  spotsCount: {
    type: Number,
    default: 0,
  },
  handle: {
    type: String,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default Mongoose.model('User', UserSchema);
