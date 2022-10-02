function findMedian(arr) {
    quickSort(arr, 0, arr.length);

    const median = Math.abs(Math.floor((arr.length) / 2))
    const value = arr[median];
    return value;
}


const quickSort = (nums, left, right) => {
    if (left < right) {
        const partitionIdx = partition(nums, left, right);
        quickSort(nums, left, partitionIdx - 1);
        quickSort(nums, partitionIdx + 1, right);
    }
}

const partition = (nums, left, right) => {
    const pivotElement = nums[right];
    let partitionIdx = left;
    for (let i = left; i < right; i++) {
        if (nums[i] < pivotElement) {
            swap(nums, i, partitionIdx);
            partitionIdx++;
        }
    }

    swap(nums, right, partitionIdx);
    return partitionIdx;
}

const swap = (nums, left, right) => {
    const temp = nums[right];
    nums[right] = nums[left];
    nums[left] = temp;
}


describe('findMedian', () => {
    it('should...', () => {
        expect(findMedian([1,4,5,6,0,2,3])).toEqual(3);
    });
});