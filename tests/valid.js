require('babel-polyfill');
const fs = require('fs');
import { assert } from 'chai';


const input = fs.createReadStream("short.list");
const output = process.stdout;
const parse = require("../src/parse.js");
suite('VALID JSON');

test('Short list', async () => {
    parse(input, output);
    // assert.equal(parent, 'img', 'images must be in img directory');
});