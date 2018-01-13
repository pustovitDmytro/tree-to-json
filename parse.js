const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const reStart = /^(\W)+\s/g;
    let symbol = reStart.exec(input);
    symbol = symbol || ' ';
    console.log(`Received: ${symbol[1]}`);
});