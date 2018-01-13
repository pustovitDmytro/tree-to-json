const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const reStucture = /^(\W+)\s/g;
    const reIsLast = /└/g;
    const reHasChild = /┬/g;
    const reIsSimple = /─/g;

    const bundle = {};
    const reModule = /\s*([^\s]+)@([^\s]+)/g;

    const [ , structure ] = reStucture.exec(input) || ['', '┬'];
    // console.log('structure', structure);
    const isLast = !!~structure.search(reIsLast);
    const isSimple = !!~structure.search(reIsSimple);
    const hasChild = !!~structure.search(reHasChild);
    const [, moduleName, version] = reModule.exec(input)||['', 'root', ''];
    const element = {version};
    if (hasChild) element.childs = {};
    console.log({isLast, isSimple, hasChild, moduleName, version});
});