require('babel-polyfill');
const fs = require('fs');
import { assert } from 'chai';
const path = require('path');
const { parseAsync, parse } = require("../src/index.js");

suite('VALID JSON');

test('Positive: Short File', async () => {
    const inputPath = path.resolve(__dirname, 'lists/short.list');
    const outputPath = path.resolve(__dirname, 'tmp/short.json');
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    await parseAsync({ input, output });
    require(outputPath);
});

test('Positive: Short File: nodeback', () => {
    const inputPath = path.resolve(__dirname, 'lists/short.list');
    const outputPath = path.resolve(__dirname, 'tmp/short.json');
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    parse({ input, output }, (err, done) => JSON.parse(JSON.stringify(done)));
});

test('Positive: Long File: Async', async () => {
    const inputPath = path.resolve(__dirname, 'lists/long.list');
    const outputPath = path.resolve(__dirname, 'tmp/long.json');
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    await parseAsync({ input, output });
    require(outputPath);
});