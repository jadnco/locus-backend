/* @flow */

'use strict';

import Path from 'path';

class Upload {

  static create(req: Object, res: Object): void {
    res.json({file: req.file});
  }

}

export default Upload;
