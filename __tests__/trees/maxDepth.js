const { TreeNode } = require('../../src/TreeNode');

const maxDepth = (node, currentDepth) => {
    if (!node) {
        return currentDepth;
    }

    currentDepth++;

    return Math.max(maxDepth(node.right, currentDepth), maxDepth(node.left, currentDepth));
};


describe('', () => {
    it('', () => {
        const root = new TreeNode();
        root.insert([1, 1, 1, 1, null, null, null, 1, null, null, null, 1, null, null]);

        // console.log(maxDepth(root, 0));
    });
});