/* @flow */

'use strict';

import Path from 'path';

class Upload {

  static create(req: Object, res: Object): void {

    console.log('BODY:', req);
    res.json({ upload: req.file, dimensions: req.body.dimensions });
  }

}

export default Upload;
