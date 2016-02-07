'use strict';

import Mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  fullName: String,
  email: String,
  created: {
    type: Date,
    default: Date.now,
  },
  handle: {
    type: String,
    unique: true,
  },
});

export default Mongoose.model('User', UserSchema);
