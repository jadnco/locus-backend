/* @flow */

'use strict';

import Model from '../models/feed';
import Spot from '../models/spot';

class Feed extends Model {

  /**
   * Get a record with specific id
   *
   * @param {string} id
   * - The id to make the lookup for
   *
   * @param {Object} res
   * - Response object from Express
   *
   * @return void
   */
  static get(id: string, res: Object): void {

    // This should get the most recent spots
    // from all the accounts being followed
    // by the authenticated user
    Spot.findById(id)
      .then(user => res.json({ user }))
      .catch(err => res.send(err));
  }

}

export default Feed;
