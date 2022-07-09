const sort = (array, k) => {
    const results = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let mid = binarySearch(array, k);
    if (mid === -1) {
        return -1;
    }
    results[0] = mid;

    
    return results;
}

const binarySearch = (array, v) => {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (v === array[mid]) {
            return mid;
        }
        if (v > array[mid]) {
            left = mid + 1;
        }

        if (v < array[mid]) {
            right = mid - 1;
        }
    }

    return -1;
}


describe('startAndEndOfTargetInSortedArray', () => {
    it('should return -1, when value is not in the array', () => {
        expect(sort([1, 2, 3, 4, 5, 5, 5, 6, 7], 8)).toEqual(-1);
    });
    it('should return 7, when value is 6 in the array, since it is a single index', () => {
        expect(sort([1, 2, 3, 4, 5, 5, 5, 6, 7], 6)).toEqual([7]);
    });

});