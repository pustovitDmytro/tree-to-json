const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const reStucture = /^(\W+)\s/g;
    const reIsLast = /└/g;
    const reHasChild = /┬\s/g;
    const reIsSimple = /─\s/g;
    const [ structure ] = input.match(reStucture) || ['┬'];
    // console.log('structure', structure);
    const isLast = !!~structure.search(reIsLast);
    const isSimple = !!~structure.search(reIsSimple);
    const hasChild = !!~structure.search(reHasChild);
    console.log(`-> ${structure}`, {isLast, isSimple, hasChild});
});