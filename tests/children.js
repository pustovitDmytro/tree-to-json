require('babel-polyfill');
const fs = require('fs');
import { assert } from 'chai';
const path = require('path');
const { parseAsync } = require("../src/index.js");

const inputPath = path.resolve(__dirname, 'lists/short.list');
const outputPath = path.resolve(__dirname, 'tmp/short_children.json');
const input = fs.createReadStream(inputPath);
const output = fs.createWriteStream(outputPath);

parseAsync({ input, output }).then(payload => {
    const json = payload;
    const root = json["tree-to-json"];

    suite('CHILDREN');

    test('Root childs', () => {
        assert.exists(root, 'root exist');
        assert.exists(root.children, 'root has childrens');
        const children = Object.keys(root.children);
        assert.lengthOf(children, 1, "test root has only 1 child")
    });

    test('BabelCli only keys', () => {
        const babelCli = root.children["babel-cli"];
        assert.hasAllKeys(babelCli.children, ["babel-polyfill", "babel-core", "babel-register", "babel-runtime"])
    });

    test('DeepChilds Exist', async () => {
        const level1 = root.children["babel-cli"];
        assert.isObject(level1, "babel-cli");
        const level21 = level1.children["babel-polyfill"];
        const level22 = level1.children["babel-register"];
        const level23 = level1.children["babel-runtime"];
        assert.isObject(level21, "babel-cli > babel-polyfill");
        assert.isObject(level22, "babel-cli > babel-register");
        assert.isObject(level23, "babel-cli > babel-runtime");
    });
});
