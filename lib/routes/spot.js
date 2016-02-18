/* @flow */

'use strict';

import Model from '../models/spot';
import Likes from '../models/likes';

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
    let likes = new Likes();

    // The spot record needs a refence to the likes
    spot.likes = likes._id;

    // The likes record needs a reference to the spot
    likes.spot = spot._id;

    // Save the spot
    spot.save()
      .then(_spot => {

        // Save the likes
        likes.save()
          .then(() => res.json({ spot: _spot }))
          .catch(err => res.send(err));
      })
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
      .then(spot => res.json({ spot }))
      .catch(err => res.send(err));
  }

  static getLikes(id: string, res: Object): void {
    Likes.findOne({ spot: id })
      .then(likes => res.json({ likes }))
      .catch(err => res.send(err));
  }

  static addLikes(id: string, req: Object, res: Object): void {

    // TODO: This should send an entire user object, not just id
    let user = req.body.user;

    Likes.findOneAndUpdate({ spot: id }, { $push: { users: user } }, { safe: true, upsert: true })
      .then(likes => {

        // Persist the record
        likes.save()
          .then(() => {

            // Increment the likesCount on the Spot
            Spot.findByIdAndUpdate(id, { $inc: { likesCount: 1 } })
              .then(() => res.sendStatus(200));
          })
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  }

  static getAll(res) {
    Spot.find()
      .then(spots => res.json({ spots }));
  }

  /**
   * Remove a spot record from the database
   *
   * @param {string} id
   * - Unique identifier of record to remove
   *
   * @param {Object} res
   * - Response object from Express
   *
   * @return void
   */
  static remove(id: string, res: Object): void {
    Spot.findByIdAndRemove(id)
      .then(() => res.sendStatus(200))
      .catch(err => res.send(err));
  }

  /**
   * Update a spot record and persist to database
   *
   * @param {string} id
   * - Unique identifier of record to update
   *
   * @param {Object} req
   * - Request object from Express
   *
   * @param {Object} res
   * - Response object from Express
   *
   * @return void
   */
  static update(id: string, req: Object, res: Object): void {
    let updated = req.body.spot;

    updated.modified = Date.now();

    Spot.findByIdAndUpdate(id, { $set: updated })
      .then(spot => res.json({ spot }))
      .catch(err => res.send(err));
  }
}

export default Spot;
