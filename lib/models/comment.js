'use strict';

import Mongoose, {Schema} from 'mongoose';

const CommentSchema = new Schema({
  spot: {
    type: Schema.Types.ObjectId,
    ref: 'Spot',
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: String,
  repliesCount: {
    type: Number,
    default: 0,
  },
  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
});

export default Mongoose.model('Comment', CommentSchema);
