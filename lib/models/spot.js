'use strict';

import Mongoose, {Schema} from 'mongoose';

const SpotSchema = new Schema({
  hasPhoto: Boolean,
  photo: String,
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  modified: Date,
  car:{
    type: Schema.Types.ObjectId,
    ref: 'Car',
  },
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
