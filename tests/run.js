require('babel-polyfill');
const fs = require('fs');
const path = require('path');
const parseAsync = require("../src/parseAsync.js");
const inputPath = path.resolve(__dirname, 'lists/short.list');
const input = fs.createReadStream(inputPath);
const output = process.stdout;
parseAsync({ input, output });