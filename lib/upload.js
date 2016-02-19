/* @flow */

'use strict';

import { Router } from 'express';

import Upload from './routes/upload';

const router = Router();

router.route('/')
  .post((req, res) => {
    Upload.create(req, res);
  });

export default router;
