/* @flow */

/* @flow */

'use strict';

import Model from '../models/spot';

class Spot extends Model {

  /**
   * Create a new spot record and persist it to the database
   *
   * @param {Object} req
   * - Request object from Express
   *
   * @param {Object} res
   * - Response object from Express
   *
   * @return void
   */
  static create(req: Object, res: Object): void {
    let spot = new Spot(req.body.spot);

    spot.save()
      .then(_spot => res.json({spot: _spot}))
      .catch(err => res.send(err));
  }

  /**
   * Get a spot record with specific id
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
    Spot.findById(id)
      .then(spot => res.json({spot}))
      .catch(err => res.send(err));
  }

  static remove(id: string, res: Object): void {
    Spot.findByIdAndRemove(id)
      .then(() => res.sendStatus(200))
      .catch(err => res.send(err));
  }

  static update(id: string, res: Object): void {
    let updated = req.body.spot;

    updated.modified = Date.now();

    Spot.findByIdAndUpdate(id, {$set: updated})
      .then(spot => res.json({spot}))
      .catch(err => res.send(err));
  }
}

export default Spot;
