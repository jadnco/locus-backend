/* @flow */

'use strict';

import { Router } from 'express';

import Car from './routes/car';
import Spot from './routes/spot';
import User from './routes/user';

const router = Router();

router.route('/cars/:id')
  .get((req, res) => {
    Car.get(req.params.id, res);
  })
  .post((req, res) => {
    Car.create(req, res);
  });

/**
 * Spot
 */
router.route('/spots')
  .post((req, res) => {
    Spot.create(req, res);
  })
  .get((req, res) => {
    Spot.getAll(res);
  });

router.route('/spots/:id')
  .get((req, res) => {
    Spot.get(req.params.id, res);
  })
  .put((req, res) => {
    Spot.update(req.params.id, req, res);
  })
  .delete((req, res) => {
    Spot.delete(req.params.id, res);
  });

router.route('/spots/:id/likes')
  .get((req, res) => {
    Spot.getLikes(req.params.id, res);
  })
  .put((req, res) => {
    Spot.addLikes(req.params.id, req, res);
  })
  .delete((req, res) => {
    Spot.deleteLikes(req.params.id, res);
  });

/**
 * User
 */
router.route('/users')
  .post((req, res) => {
    User.create(req, res);
  })
  .get((req, res) => {
    User.getAll(res);
  });

router.route('/users/:id')
  .get((req, res) => {
    User.get(req.params.id, res);
  })
  .put((req, res) => {
    User.update(req.params.id, req, res);
  })
  .delete((req, res) => {
    User.delete(req.params.id, res);
  });

router.route('/users/:id/followers')
  .get((req, res) => {
    User.getFollowers(req.params.id, res);
  });

router.route('/users/:id/following')
  .get((req, res) => {
    User.getFollowing(req.params.id, res);
  });

export default router;
