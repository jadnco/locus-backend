'use strict';

import Mongoose, { Schema } from 'mongoose';

const SpotsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  spots: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Spot',
    },
  ],
});

export default Mongoose.model('Spots', SpotsSchema);
