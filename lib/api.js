/* @flow */

'use strict';

import {Router} from 'express';

import Car from './routes/car';
import Spot from './routes/spot';

const router = Router();

router.route('/cars/:id')
  .get((req, res) => {
    Car.get(req.params.id, res);
  })
  .post((req, res) => {
    Car.create(req, res);
  });

router.route('/spots')
  .post((req, res) => {
    Spot.create(req, res);
  });

router.route('/spots/:id')
  .get((req, res) => {
    Spot.get(req.params.id, res);
  })
  .put((req, res) => {
    Spot.update(req.params.id, res);
  })
  .delete((req, res) => {
    Spot.delete(req.params.id, res);
  });

export default router;
