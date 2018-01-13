const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const reStucture = /^(\W+)\s/g;
    const reIsLast = /└/g;
    const reHasChild = /┬/g;
    const reIsSimple = /─$/g;
    const structure = reStart.exec(input)[1] || '';
    const isLast = structure.test(reIsLast);
    const isSimple = structure.tets(reIsSimple);
    const hasChild = structure.test(reHasChild);
    console.log(`-> ${structure}`, {isLast, isSimple, hasChild});
});