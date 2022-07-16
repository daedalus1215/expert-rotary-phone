const TreeNode = require('../../src/TreeNode');


const getTreeHeight = root => {
    let height = 0;
    console.log('root',root)
    while (root.left) {
        console.log('height',height)
        height++;
        root = root.left;
    }
    console.log('end')
    return height;
}


describe('__tests__/trees/numberOfNodesInCompleteTree', () => {
    describe('getTreeHeight', () => {
        it('should return...', () => {
            const root = new TreeNode();
            root.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);
            expect(getTreeHeight(root)).toEqual(3);
        });
    });
});