const { TreeNode } = require('../../src/TreeNode');

const rightSideViewDFS = root => {
    const results = [];
    dfs(root, 0, results);
    return results;
}

const dfs = (node, currentLevel, results) => {
    if (!node) return;
    if (currentLevel >= results.length) {
        results.push(node.value);
    }

    if (node.right) {
        dfs(node.right, currentLevel +1, results)
    }

    if (node.left) {
        dfs(node.left, currentLevel + 1, results)
    }
}


describe('rightSideViewDFS', () => {
    it('should return [1,3,6,7,8] when given the following TreeNode: [2, 3, 4, 5, null, 6, null, 7, null, null, null, null, 8, null, null, null]', () => {
        const treeNode = new TreeNode(1);
        treeNode.insert([2, 3, 4, 5, null, 6, null, 7, null, null, null, null, 8, null, null, null]);
        const actual = rightSideViewDFS(treeNode);
        expect(actual).toEqual([1, 3, 6, 7, 8])
    })
})