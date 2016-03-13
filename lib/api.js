/* @flow */

'use strict';

import { Router } from 'express';

import Car from './routes/car';
import Photo from './routes/photo';
import Spot from './routes/spot';
import Likes from './routes/likes';

import User from './routes/user';
import Followers from './routes/followers';

const router = Router();

router.route('/cars/:id')
  .get((req, res) => {
    Car.get(req.params.id, res);
  })
  .post((req, res) => {
    Car.create(req, res);
  });

router.route('/photos')
  .post((req, res) => {
    Photo.create(req, res);
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
    Spot.remove(req.params.id, res);
  });

router.route('/spots/:id/likes')
  .get((req, res) => {
    Likes.get(req.params.id, res);
  })
  .put((req, res) => {
    Likes.add(req.params.id, req, res);
  })
  .delete((req, res) => {
    Likes.remove(req.params.id, req, res);
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
    User.remove(req.params.id, res);
  });

router.route('/users/:id/followers')
  .get((req, res) => {
    Followers.get(req.params.id, res);
  })
  .post((req, res) => {
    Followers.add(req.params.id, req, res);
  })
  .delete((req, res) => {
    Followers.remove(req.params.id, req, res);
  });

router.route('/users/:id/spots')
  .get((req, res) => {
    User.getSpots(req.params.id, req, res);
  })
  .post((req, res) => {
    Spot.create(req.params.id, req, res);
  })
  .delete((req, res) => {
    Spot.remove(req.params.id, req, res);
  });

router.route('/users/:id/likes')
  .get((req, res) => {
    User.getLikes(req.params.id, req, res);
  });

router.route('/users/:id/following')
  .get((req, res) => {
    User.getFollowing(req.params.id, res);
  });

export default router;
