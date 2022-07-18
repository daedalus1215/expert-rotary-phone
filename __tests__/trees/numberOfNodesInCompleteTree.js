const { TreeNode } = require('../../src/TreeNode');


const getTreeHeight = root => {
    let height = 0;
    // console.log('root', root)
    while (root.left) {
        // console.log('height', height)
        height++;
        root = root.left;
    }
    // console.log('end')
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

const numberOfNodesInCompleteTree = (root) => {
    if (!root) return null;
    const height = getTreeHeight(root);
    if (height === 0) return 1;
    let left = 0,
        upperCount = Math.pow(2, height) -1,
        right = upperCount;

    while (left < right) {
        const idxToFind = Math.ceil((left + right) / 2);
        if (nodeExists(idxToFind, height, root)) {
            left = idxToFind;
        } else {
            right = idxToFind - 1;
        }
    }

    return upperCount + left;
}


describe('__tests__/trees/numberOfNodesInCompleteTree', () => {
    let root;
    beforeEach(() => {
        root = new TreeNode();
        root.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);
    });

    describe('getTreeHeight', () => {
        it('should return a height of 3 with the following Tree', () => {
            expect(getTreeHeight(root)).toEqual(3);
        });
    });
    describe('nodeExists', () => {
        it('should return true, if we expect there to be 4 items on the last level', () => {
            expect(nodeExists(4, 3, root)).toEqual(true);
        })
        it('should return false, if we expect there to be 5 items on the last level', () => {
            expect(nodeExists(5, 3, root)).toEqual(false);
        })
    })

    describe('numberOfNodesInCompleteTree', () => {
        it('should...', () => {
            expect(numberOfNodesInCompleteTree(root)).toEqual(11);
        })
    });
});