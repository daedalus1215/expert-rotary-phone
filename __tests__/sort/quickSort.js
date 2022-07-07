const quickSort = (array, left, right) => {
    if (left < right) {
        const partitionIdx = partition(array, left, right);
        quickSort(array, left, partitionIdx - 1);
        quickSort(array, partitionIdx + 1, right);
    }
}

const partition = (array, left, right) => {
    const pivotElement = array[right];
    let partitionIdx = left;
    for (let j = left; j < right; j++) {
        if (array[j] < pivotElement) {
            swap(array, partitionIdx, j);
            partitionIdx++;
        }
    }
    swap(array, partitionIdx, right);
    return partitionIdx;
}


const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const getKthLargest = (array, k) => {
    const indexToFind = array.length - k;
    quickSort(array, 0, array.length - 1);
    return array[indexToFind];
}

describe('quickSort', () => {
    it('should...', () => {
        expect(getKthLargest([5, 3, 1, 6, 4, 2], 2)).toEqual(5);
    });
})