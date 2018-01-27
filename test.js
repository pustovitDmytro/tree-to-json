const fs = require('fs-extra')
const path = require('path');
const dir = path.resolve(__dirname, 'tests/tmp');

fs.removeSync(dir)
fs.mkdirSync(dir);

require('./tests');