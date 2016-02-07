/* @flow */

'use strict';

import {Router} from 'express';

import Car from './routes/car';

const router = Router();

router.route('/car/:id')
  .get((req, res) => {
    Car.get(req.params.id, res);
  })
  .post((req, res) => {
    Car.create(req, res);
  });

export default router;
