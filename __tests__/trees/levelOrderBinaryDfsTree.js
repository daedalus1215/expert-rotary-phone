const { TreeNode } = require('../../src/TreeNode');


const binaryLevelOrderTraversal = (root) => {
    let level = 0;
    let res = new Array().map(() => []);

    dfs(root, level , res)
    console.log(res);

    return res;
}


const dfs = (node, level, res) => {
    if (node.value === null) {
        return;
    }
    if (!res[level]) {
        res.push([]);
    }
    res[level].push(node.value);
    
    if (node.left !== null) {
        dfs(node.left, level +1, res);
    }

    if (node.right !== null) {
        dfs(node.right, level+1, res);
    }
};

describe('', () => {
    it('', () => {
        const root = new TreeNode(1);
        root.insert([2, 3, 6, 1, 9, 2, 4, 5, 8]);
        const actual = binaryLevelOrderTraversal(root);
        console.log(actual);
    });
});