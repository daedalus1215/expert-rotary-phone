const sort = (array, k) => {
    if (array.length === 0) {
        return [-1, -1];
    }
    const results = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let mid = binarySearch(array, k, 0, array.length - 1);
    if (mid === -1) {
        return [-1, -1];
    }
    leftIndex = mid;
    rightIndex = mid;
    console.log('mid', mid);
    console.log('leftIndex', leftIndex);
    console.log('rightIndex', rightIndex);
    console.log('what are you for leftyIndex?', binarySearch(array, k, 0, leftIndex));

    while (leftIndex !== -1) {
        results[0] = leftIndex;
        leftIndex = binarySearch(array, k, 0, leftIndex - 1);
    }

    while (rightIndex !== -1) {
        results[1] = rightIndex;
        rightIndex = binarySearch(array, k, rightIndex +1, array.length -1);
    }
    // while (leftIndex > 0 && rightIndex <= max) {

    //     let right = binarySearch(array.slice(rightIndex), k);
    //     console.log('right', right)
    //     if (right !== -1) {
    //         rightIndex = rightIndex + 1;
    //     } else {
    //         results[1] = rightIndex;
    //     }
    // }

    return results;
}

const binarySearch = (array, v, left, right) => {
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
        expect(sort([1, 2, 3, 4, 5, 5, 5, 6, 7], 8)).toEqual([-1, -1]);
    });
    it('should return 7, when value is 6 in the array, since it is a single index', () => {
        expect(sort([1, 2, 3, 4, 5, 5, 5, 6, 7], 6)).toEqual([7,7]);
    });
    it('should return [4,6], when value is 5 in the array', () => {
        expect(sort([1, 2, 3, 4, 5, 5, 5, 6, 7], 5)).toEqual([4, 6]);
    });
});