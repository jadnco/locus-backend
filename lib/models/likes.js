'use strict';

import Mongoose, { Schema } from 'mongoose';
import User from './user';

const LikesSchema = new Schema({
  spot: {
    type: Schema.Types.ObjectId,
    ref: 'Spot',
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

export default Mongoose.model('Likes', LikesSchema);
