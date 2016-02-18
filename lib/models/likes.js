'use strict';

import Mongoose, { Schema } from 'mongoose';
import User from './User';

const LikesSchema = new Schema({
  spot: {
    type: Schema.Types.ObjectId,
    ref: 'Spot',
  },
  users: [User],
});

export default Mongoose.model('Likes', LikesSchema);
