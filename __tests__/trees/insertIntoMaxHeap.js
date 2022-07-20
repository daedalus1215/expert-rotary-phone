const { getParent, swapper } = require('../../src/TreeNode');
const insertIntoMaxHeap = (array, value) => {
    array.push(value);
    swap(array);
}

const swap = array => {
    let current = array.length - 1;
    let currentV = array[current];
    let parent = getParent(current);
    let parentV = array[parent];

    while (currentV > parentV) {
        swapper(array, parent, current);
        current = parent;
        currentV = array[current];
        parent = getParent(current);
        parentV = array[parent];
    }
}




describe('__tests__/trees/insertIntoMaxHeap.js', () => {
    it('should', () => {
        const array = [50, 25, 45, 35, 10, 15, 20, 40];
        insertIntoMaxHeap(array, 75);
        expect(array).toEqual([75, 50, 45, 25, 10, 15, 20, 40, 35]);
    });
});