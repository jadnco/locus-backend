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

  static add(id: string, req: Object, res: Object): void {
    let user = req.body.user;

    Likes.findOneAndUpdate({ spot: id },
      { $push: { users: user } },
      { safe: true, upsert: true })
      .then(() => {

        console.log('Adding Like', user);

        // Increment the `likesCount` on the Spot
        Spot.findByIdAndUpdate(id, { $inc: { likesCount: 1 } })
          .then(() => res.sendStatus(200))
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  }

  static remove(id: string, req: Object, res: Object): void {
    let user = req.body.user;

    Likes.findOneAndUpdate({ spot: id },
      { $pull: { users: user } })
      .then(() => {

        console.log('Removing like ', user);

        // Decrement the `likesCount` on the Spot
        Spot.findByIdAndUpdate(id, { $inc: { likesCount: -1 } })
          .then(() => res.sendStatus(200))
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  }
}

export default Likes;
