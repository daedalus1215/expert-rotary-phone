const mergeSort = (array) => {
    if (array.length === 1) {
        return array;
    }

    const middle = array.length / 2;
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
};

const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
};

describe('mergeSort', () => {
    it('should', () => {
        let array = [6, 2, 8, 1, 9, 3];
        const actual = mergeSort(array);
        expect(actual).toEqual([1, 2, 3, 6, 8, 9]);

    });
})