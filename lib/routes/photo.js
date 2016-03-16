/* @flow */

'use strict';

import Geocoder from 'node-geocoder';

import Model from '../models/photo';

import config from '../config';

class Photo extends Model {

  /**
   * Create a new record and persist it to the database
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
    let photo = new Photo(req.body.photo);

    Geocoder('google', 'https').reverse({ lat: photo.location.latitude, lon: photo.location.longitude })
      .then(data => {
        photo.location.city = data[0].city;
        photo.location.country = data[0].country;

        console.log('Photo created: ', photo);

        return photo.save();
      })
      .then(photo => res.json({ photo }))
      .catch(err => res.send(err));
  }

  // Temp method to get all users
  static getAll(res) {
    Photo.find()
      .then(photos => res.json({ photos }));
  }

}

export default Photo;
