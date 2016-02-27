/* @flow */

'use strict';

import Model from '../models/followers';
import User from '../models/user';

class Followers extends Model {

  /**
   * Return a populated list of all followers of a user
   *
   * @param {string} id
   * - Original user reference ID.
   *
   * @param {Object} res
   * - Response object from Express
   *
   * @return void
   */
  static get(id: string, res: Object): void {
    Followers.findOne({ user: id })

      // Populate all `User` records inside the `followers` array.
      // This replaces ID references with actual record objects.
      .populate('followers')
      .then(followers => res.json({ followers }))
      .catch(err => res.send(err));
  }

  /**
   * Add a new User.id reference to the followers array
   * and increment the user's `followersCount` by one.
   *
   * @param {string} id
   * - Original user reference ID, this is the
   *   user that will get followed.
   *
   * @param {Object} req
   * - Request object from Express that should contain
   *   a user ID reference.
   *
   * @param {Object} res
   * - Response object from Express
   *
   * @return void
   */
  static add(id: string, req: Object, res: Object): void {

    // Reference to the user by id
    let follower = req.body.user;

    Followers.findOneAndUpdate({ user: id },
      { $push: { followers: follower } },
      { safe: true, upsert: true })
      .then(() => {

        // Increment the user's followersCount
        User.findByIdAndUpdate(id, { $inc: { followersCount: 1 } })
          .then(() => res.sendStatus(200))
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  }

  /**
   * Remove a User.id reference from the followers array
   * and decrement the user's `followersCount` by one.
   *
   * @param {string} id
   * - Original user reference ID, this is the
   *   user that will lose the follower.
   *
   * @param {Object} req
   * - Request object from Express that should contain
   *   an ID reference of the user to remove.
   *
   * @param {Object} res
   * - Response object from Express
   *
   * @return void
   */
  static remove(id: string, req: Object, res: Object): void {

    // Reference to the user by id
    let follower = req.body.user;

    Followers.findOneAndUpdate({ user: id },
      { $pull: { followers: follower } })
      .then(() => {

        // Decrement the user's followersCount
        User.findByIdAndUpdate(id, { $inc: { followersCount: -1 } })
          .then(() => res.sendStatus(200))
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  }
}

export default Followers;
