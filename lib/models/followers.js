'use strict';

import Mongoose, { Schema } from 'mongoose';

const FollowersSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

export default Mongoose.model('Followers', FollowersSchema);
