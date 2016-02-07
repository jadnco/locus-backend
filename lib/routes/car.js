/* @flow */

'use strict';

import Model from '../models/car';

class Car extends Model {

  /**
   * Create a new car record and persist it to the database
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
    let car = new Car(req.body.car);

    car.save()
      .then(_car => res.json({car: _car}))
      .catch(err => res.send(err));
  }

  /**
   * Get a car record with specific id
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
    Car.findById(id)
      .then(car => res.json({car}))
      .catch(err => res.send(err));
  }

  static remove(): void {}

  static update(): void {}

}

export default Car;
