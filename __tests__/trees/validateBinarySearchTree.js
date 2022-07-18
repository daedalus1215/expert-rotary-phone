const { TreeNode } = require('../../src/TreeNode');

const validateBinarySearchTree = root => {
    if (!root) return true;
    return dfs(root, -Infinity, Infinity);
}

const dfs = (node, min, max) => {
    // console.log('node', node);
    // console.log('min', min)
    // console.log('max', max)
    if (node.value >= max || node.value <= min) {
        return false;
    }

    if (node.left) {
        if (!dfs(node.left, min, node.value)) {
            return false;
        }
    }

    if (node.right) {
        if (!dfs(node.right, node.value, max)) {
            return false;
        }
    }

    return true;
}


describe('validateBinarySearchTree', () => {
    it('should return true when it is a true binary tree', () => {
        const tree = new TreeNode(10);
        tree.insert([5, 18, 3, 8, 12, 25, null, null, null]);
        expect(validateBinarySearchTree(tree)).toEqual(true);
    });

    it('should return false when a lower than root is on the right side, but technically correct with it\'s parent', () => {
        const tree = new TreeNode(10);
        tree.insert([5, 18, 3, 8, 9, 25, null, null, null]);
        expect(validateBinarySearchTree(tree)).toEqual(false);
    });

    it('should return false when a higher than root is on the left side, but technically correct with it\'s parent', () => {
        const tree = new TreeNode(10);
        tree.insert([5, 18, 3, 15, 9, 25, null, null, null]);
        expect(validateBinarySearchTree(tree)).toEqual(false);
    });

    it('should return false when there is a duplicate', () => {
        const tree = new TreeNode(10);
        tree.insert([5, 18, 3, 3, 12, 25, null, null, null]);
        expect(validateBinarySearchTree(tree)).toEqual(false);
    });
});