require('babel-polyfill');
const fs = require('fs');
import { assert } from 'chai';
const path = require('path');

const inputPath = path.resolve(__dirname, 'short.list');
const outputPath = path.resolve(__dirname, 'tmp/short.json');

const input = fs.createReadStream(inputPath);
const output = fs.createWriteStream(outputPath);
const { parseAsync, parse } = require("../src/index.js");

suite('VALID JSON');

test('Short File', async () => {
    await parseAsync({ input, output });
    const json = require(outputPath);
});

test('Short File: nodeback', () => {
    parse({ input, output }, (err, done) => JSON.parse(JSON.stringify(done)));
});