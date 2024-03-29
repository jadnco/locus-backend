/**
 * This probably doesn't need to be a separate model,
 * this would be read-only.
 */

'use strict';

import Mongoose, { Schema } from 'mongoose';
import Spot from './spot';

const FeedSchema = new Schema({
  spots: [Spot],
});

export default Mongoose.model('Feed', FeedSchema);
