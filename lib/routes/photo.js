/* @flow */

'use strict';

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

    photo.save()
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
