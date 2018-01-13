const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});
var tree = [];
var lookup = {};
let i = 1;
let parent = 'top';
rl.on('line', (input) => {
    const reStucture = /^(\W+)\s/g;
    const reIsLast = /└/g;
    const reHasChild = /┬/g;
    const reIsSimple = /─/g;

    const bundle = {};
    let root = bundle;
    const reModule = /\s*([^\s]+)@([^\s]+)/g;
    const map = {};
    const [ , structure ] = reStucture.exec(input) || ['', '┬'];
    // console.log('structure', structure);
    const isLast = !!~structure.search(reIsLast);
    const isSimple = !!~structure.search(reIsSimple);
    const hasChild = !!~structure.search(reHasChild);
    const [, moduleName, version] = reModule.exec(input)||['', 'root', ''];

    // const element = {version};
    // map[moduleName] = {link: element};

    // root[moduleName] = element;
    // const parent  = root;
    // if (hasChild) element.childs = {};
    //
    // if (isLast) root = parent;
    // console.log({isLast, isSimple, hasChild, moduleName, version});
    var obj = { id: i, parent_id: parent, name: moduleName, children: [] };

    if (hasChild) parent = i;
    lookup[obj.id] = obj;

    if (lookup[obj.parent_id]) {
        lookup[obj.parent_id].children.push(obj);
    } else {
        tree.push(obj);
    }

    console.log(i, moduleName);
    i++;
    if(i==22) console.log(JSON.stringify(tree));
});