/* @flow */

'use strict';

import Model from '../models/spots';
import User from '../models/user';
import Spot from '../models/spot';

class Spots extends Model {

  static get(id: string, res: Object): void {
    Spots.findOne({ user: id })
      .populate('spots')
      .then(spots => res.json({ spots }))
      .catch(err => res.send(err));
  }

  // POST request for creating new Spots
  static add(id: string, req: Object, res: Object): void {
    let spot = new Spot(req.body.spot);

    spot.save()
      .then(spot => {

        Spots.findOneAndUpdate({ user: id },
          { $push: { spots: spot._id } },
          { safe: true, upsert: true })
          .then(() => {

            // Increment the `spotsCount` for the user
            User.findByIdAndUpdate(id, { $inc: { spotsCount: 1 } })
              .then(() => res.sendStatus(200))
              .catch(err => res.send(err));
          })
      .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  }

  static remove(id: string, req: Object, res: Object): void {
    let spot = req.body.spot;

    Spots.findOneAndUpdate({ user: id },
      { $pull: { spots: spot } })
      .then(() => {

        // Decrement the `spotsCount`
        User.findByIdAndUpdate(id, { $inc: { spotsCount: -1 } })
          .then(() => res.sendStatus(200))
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  }
}

export default Spots;
