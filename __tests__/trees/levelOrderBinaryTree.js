const TreeNode = require('../../src/TreeNode');

const levelOrderBinaryTree = (root) => {
    let res = [], q = [root];
    console.log('q.length', q.length)
    while (q.length) {
        console.log('q.length', q.length)
        let length = q.length, count = 0;
        const currentLevelValues = [];
        while (count < length) {
            console.log('q.length', q.length)
            const currentNode = q.shift();
            currentLevelValues.push(currentNode.value);
            if (currentNode.left) {
                q.push(currentNode.left);
            }
            if (currentNode.right) {
                q.push(currentNode.right);
            }
            count++;
        }
        res.push(currentLevelValues)
    }
    return res;
};


describe('levelOrderBinaryTree', () => {
    it('should...', () => {
        const root = new TreeNode();
        root.insert([3, 6, 1, 9, 2, 4, 5, 8]);
        const actual = levelOrderBinaryTree(root);
        console.log('root', root);
        console.log('actual', actual);
    });
});