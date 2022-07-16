const TreeNode = require('../../src/TreeNode');


const getTreeHeight = root => {
    let height = 0;
    console.log('root', root)
    while (root.left) {
        console.log('height', height)
        height++;
        root = root.left;
    }
    console.log('end')
    return height;
}


const nodeExists = (idxToFind, height, node) => {
    let left = 0, right = Math.pow(2, height) - 1, count = 0;
    while (count < height) { // because height tells us the amount of nodes on this level
        const midOfNode = Math.ceil((left + right) / 2);
        if (idxToFind >= midOfNode) {
            node = node.right;
            left = midOfNode;
        } else {
            node = node.left;
            right = midOfNode - 1;
        }
        count++;
    }
    return node !== null;
}


describe('__tests__/trees/numberOfNodesInCompleteTree', () => {
    describe('getTreeHeight', () => {
        it('should return a height of 3 with the following Tree', () => {
            const root = new TreeNode();
            root.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);
            expect(getTreeHeight(root)).toEqual(3);
        });
    });
    describe('nodeExists', () => {
        it('should return true, if we expect there to be 4 items on the last level', () => {
            const root = new TreeNode();
            root.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);
            expect(nodeExists(4, 3, root)).toEqual(true);
        })
        it('should return false, if we expect there to be 5 items on the last level', () => {
            const root = new TreeNode();
            root.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);
            expect(nodeExists(5, 3, root)).toEqual(false);
        })
    })
});