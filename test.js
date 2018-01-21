const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const dir = path.resolve(__dirname, 'tests/tmp');

if (fs.existsSync(dir)){
    rimraf.sync(dir);
}
fs.mkdirSync(dir);

require('./tests');