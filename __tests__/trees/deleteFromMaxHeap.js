const { getLeft, getRight, swapper } = require('../../src/TreeNode');
const deleteFromMaxHeap = (array) => {
    array.shift();
    array.unshift(array.pop());
    swap(array);
}

const swap = array => {
    let left = getLeft(0);
    let right = getRight(0);
    let current = 0;

    let leftValue = array[left];
    let rightValue = array[right];
    let currentValue = array[current];

    while (currentValue < leftValue || currentValue < rightValue) {
        if (leftValue > rightValue) {
            swapper(array, left, current);
            current = left;
        } else {
            swapper(array, right, current);
            current = right;
        }
        left = getLeft(current);
        right = getRight(current);

        currentValue = array[current];
        leftValue = array[left];
        rightValue = array[right];
    }
}




describe('__tests__/trees/deleteFromMaxHeap.js', () => {
    it('should delete first result, move last result into first place, and then sort', () => {
        const array = [75, 50, 25, 45, 35, 10, 15, 20, 40];
        deleteFromMaxHeap(array);
        expect(array).toEqual([50, 45, 25, 40, 35, 10, 15, 20]);
    });
});