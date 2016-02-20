/* @flow */

'use strict';

import Express from 'express';
import BodyParser from 'body-parser';
import Mongoose from 'mongoose';
import IP from 'ip';
import Chalk from 'chalk';
import Path from 'path';

import api from './api';
import upload from './upload';

let app = Express();

// Connect to the database
Mongoose.connect('mongodb://localhost:27017');

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.use('/api', api);
app.use('/upload', upload);

app.use('/uploads', Express.static(Path.resolve(__dirname, '../uploads')));

let server = app.listen(1998, IP.address(), () => {
  let port = server.address().port;
  let address = server.address().address;

  console.log(Chalk.magenta.bold(`==> Listening on ${address}:${port} <==`));
});
