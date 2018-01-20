const readline = require('readline');

module.exports = ({
    input = process.stdin,
    output= process.stdout
}, callback) => {
    const rl = readline.createInterface({ input, output, terminal:false });
    const tree = {};
    const lookup = {};
    let i = 1;
    let parent = 0;
    const omit = ({ children, version }) => ({ children, version });

    rl.on('line', input => {
        const reStucture = /^(\W+)\s/g;
        // const reIsLast = /└/g;
        const reHasChild = /┬/g;
        // const reIsSimple = /─/g;

        // const bundle = {};
        const reModule = /\s*([^\s]+)@([^\s]+)/g;
        const [, structure] = reStucture.exec(input) || ['', '┬'];
        // const isLast = Boolean(~structure.search(reIsLast));
        // const isSimple = Boolean(~structure.search(reIsSimple));
        const hasChild = Boolean(~structure.search(reHasChild));
        const [, moduleName, version] = reModule.exec(input)||['', 'root', ''];

        const obj = { id: i, parentId: parent, name: moduleName, children: {}, version };

        if (hasChild) {
            parent = i;
        }
        lookup[obj.id] = obj;

        if (lookup[obj.parentId]) {
            lookup[obj.parentId].children[obj.name] = omit(obj);
        } else {
            tree[obj.name] = omit(obj);
        }
        i++;
    });

    rl.on('close', () => {
        rl.output.write(JSON.stringify(tree));
        callback(null, tree);
    });
};
