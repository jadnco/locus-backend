/* @flow */

'use strict';

import Model from '../models/photo';

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

    // Persist the record
    photo.save()
      .then(photo => res.json({ photo }))
      .catch(err => res.send(err));
  }

}

export default Photo;
