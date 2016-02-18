/* @flow */

'use strict';

import Model from '../models/user';

class User extends Model {

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
    let user = new User(req.body.user);

    user.save()
      .then(_user => res.json({ user: _user }))
      .catch(err => res.send(err));
  }

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
    User.findById(id)
      .then(user => res.json({ user }))
      .catch(err => res.send(err));
  }

  /**
   * Get a list of all followers as User objects
   *
   * @param {string} id
   * - The id of the user
   *
   * @param {Object} res
   * - Response object from Express
   *
   * @return void
   */
  static getFollowers(id: string, res: Object): void {
    User.findById(id)
      .then(user => {
        User.find({ _id: { $in: user.followers } })
          .then(followers => res.json({ followers }))
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  }

  /**
   * Get a list of all following as User objects
   *
   * @param {string} id
   * - The id of the user
   *
   * @param {Object} res
   * - Response object from Express
   *
   * @return void
   */
  static getFollowing(id: string, res: Object): void {
    User.findById(id)
      .then(user => {
        User.find({ _id: { $in: user.following } })
          .then(following => res.json({ following }))
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  }

  /**
   * Remove a record from the database
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
    User.findByIdAndRemove(id)
      .then(() => res.sendStatus(200))
      .catch(err => res.send(err));

    // should delete all spots
  }

  /**
   * Update a record and persist to database
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
    let updated = req.body.user;

    updated.modified = Date.now();

    User.findByIdAndUpdate(id, { $set: updated })
      .then(user => res.json({user}))
      .catch(err => res.send(err));
  }

  static addFollower(id: string, follower: string, res: Object): void {
    User.findByIdAndUpdate(id, { $push: { followers: follower } }, { safe: true, upsert: true })
      .then(() => res.sendStatus(200))
      .catch(err => res.send(err));
  }

  static removeFollower(id: string, follower: string, res: Object): void {
    User.findByIdAndUpdate(id, { $pull: { followers: follower } })
      .then(() => res.sendStatus(200))
      .catch(err => res.send(err));
  }
}

export default User;
