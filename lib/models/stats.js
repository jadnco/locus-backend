'use strict';

import Mongoose, {Schema} from 'mongoose';

const StatsSchema = new Schema({
  msrp: Number,
  topSpeed: Number,
});

export default Mongoose.model('Stats', StatsSchema);
