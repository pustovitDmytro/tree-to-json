const fs = require('fs');
const path = require('path');
const dir = path.resolve(__dirname, 'tests/tmp');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const { execSync } = require('child_process');
execSync('npm run build');

require('./tests');