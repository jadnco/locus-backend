/* @flow */

'use strict';

import { Router } from 'express';
import Multer from 'multer';

import Upload from './routes/upload';

const router = Router();

let uploader = Multer({
  dest: 'uploads/',
  limits: {

    // 8M bytes = 8MB
    fileSize: 8e6,

    // This should change if more than one photo will ever be used
    files: 1,
  },
});

router.route('/')
  .post(uploader.single('photo'), (req, res) => {

    console.log('Uploading a photo...', req.file);
    Upload.create(req, res);
  });

export default router;
