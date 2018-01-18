require('babel-polyfill');
const fs = require('fs');
import { assert } from 'chai';
const path = require('path');

const inputPath = path.resolve(__dirname, 'short.list');
const outputPath = path.resolve(__dirname, 'tmp/short.json');

const input = fs.createReadStream(inputPath);
const output = fs.createWriteStream(outputPath);
const parse = require("../src/parse.js");
suite('VALID JSON');

test('Short File', async () => {
    parse({ input, output });
    console.log("require")
    const json = require(outputPath);
    // assert.equal(parent, 'img', 'images must be in img directory');
});