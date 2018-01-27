require('babel-polyfill');
const fs = require('fs');
import { assert } from 'chai';
const path = require('path');
const { parseAsync, parse } = require("../src/index.js");

suite('VALID JSON');

test('Positive: Short File', async () => {
    const inputPath = path.resolve(__dirname, 'lists/short.list');
    const outputPath = path.resolve(__dirname, 'tmp/short_valid.json');
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    await parseAsync({ input, output });
    require(outputPath);
});

test('Negative: wrong input parametr', async () => {
    const promise = parseAsync({ input: 'file' }).then(
        res => assert.isNull(res, 'result must be empty'),
        err => assert.isNotNull(err, 'there must be error'),
    )
    await promise;
});

test('Positive: Short File: nodeback with output', () => {
    const inputPath = path.resolve(__dirname, 'lists/short.list');
    const input = fs.createReadStream(inputPath);

    parse({ input }, (err, done) => JSON.parse(JSON.stringify(done)));
});

test('Positive: Long File: Async', async () => {
    const inputPath = path.resolve(__dirname, 'lists/long.list');
    const outputPath = path.resolve(__dirname, 'tmp/long.json');
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    await parseAsync({ input, output });

    require(outputPath);
});