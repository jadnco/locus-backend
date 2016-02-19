/* @flow */

'use strict';

import Path from 'path';

class Upload {
  static destination: string = Path.resolve(__dirname, '../../uploads');

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
    console.log(this.destination);
    res.json({hey: 'yo'});
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
  static get(): void {}

  static remove(): void {}

}

export default Upload;
