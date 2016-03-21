/* @flow */

'use strict';

import Geocoder from 'node-geocoder';

import Model from '../models/spot';
import Likes from '../models/likes';
import User from '../models/user';

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

    console.log('spot', spot);

    Geocoder('google', 'https').reverse({ lat: spot.location.latitude, lon: spot.location.longitude })
      .then(data => {
        spot.location.city = data[0].city;
        spot.location.country = data[0].country;

        console.log('Spot created: ', spot);

        return spot.save();
      })

      // Error getting location,
      // save spot without location
      .catch(err => spot.save())
      .catch(err => res.send(err))
      .then(() => likes.save())
      .then(() => User.findByIdAndUpdate(spot.spotter, { $inc: { spotsCount: 1 } }))
      .then(() => res.json({ spot }))
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
      .populate('photo spotter')
      .then(spot => res.json({ spot }))
      .catch(err => res.send(err));
  }

  static removeLike(id: string, res: Object, req: Object): void {
    Likes.findByIdAndRemove(id)
      .then(() => res.sendStatus(200));
  }

  static getAll(res) {
    Spot.find()
      .populate('photo spotter')
      .sort('-created')
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
      .then(spot => res.sendStatus(200))
      .catch(err => res.send(err));
  }
}

export default Spot;
