/* @flow */

'use strict';

import Model from '../models/likes';
import Spot from '../models/spot';

class Likes extends Model {

  static get(id: string, res: Object): void {
    Likes.findOne({ spot: id })

      // Populate all `User` records inside the `users` array.
      // This replaces ID references with actual record objects.
      .populate('users')
      .then(likes => res.json({ likes }))
      .catch(err => res.send(err));
  }

  static add(): void {

  }

  static remove(): void {

  }
}

export default Likes;
