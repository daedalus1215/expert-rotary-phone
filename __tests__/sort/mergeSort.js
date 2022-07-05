const mergeSort = array => {
    if (array.length === 1) {
        return array;
    }

    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    console.log('left', left);
    console.log('right', right);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

// [1,2,3,4]

const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            console.log('push is invoked!', result)
            leftIndex++;
        } else {
            result.push(right[rightIndex])
            rightIndex++;
        }
    }

    console.log('result', result);

    const yes = result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));

    console.log('result.concat', yes);
    return yes;
}


describe('mergeSort', () => {
    it('should', () => {
        let array = [6, 2, 8, 1];
        const actual = mergeSort(array);
        expect(actual).toEqual([1, 2, 6, 8]);

    });
})