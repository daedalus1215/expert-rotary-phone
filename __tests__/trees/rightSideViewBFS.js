const TreeNode = require("../../src/TreeNode");

const rightSideViewBFS = root => {
    if (!root) return [];

    const result = [];
    const queue = [root];
    while (queue.length) {
        let length = queue.length;
        let count = 0;
        let currentNode;
        while (count < length) {
            currentNode = queue.shift();
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            count++;
        }
        result.push(currentNode.value);
    }

    return result;
}


describe('', () => {
    it('', () => {
        const treeNode = new TreeNode(1);
        treeNode.insert([2, 3, 4, 5, null, 6, null, 7, null, null, null, null, 8, null, null, null]);
        const actual = rightSideViewBFS(treeNode);
        expect(actual).toEqual([1, 3, 6, 7, 8])
    })
})