
const snailTraversal = (arr, rowsCount, colsCount) => {
    if (rowsCount * colsCount !== arr.length) return []; // invalid
    let results =  Array(rowsCount).fill([]).map(() => []);
    for (let j = 0; j < arr.length; j++) {
        const i = Math.floor(j / rowsCount);
        if (i % 2 === 0) {
            results[j % rowsCount][i] = arr[j];
        } else {
            results[rowsCount - j % rowsCount-1][i] = arr[j];
        }
    }
    return results;
};

describe('', () => {
    it('', () => {
        // console.log(snailTraversal([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15], 5, 4));
        expect(snailTraversal([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15], 5, 4)).toEqual([
            [19, 17, 16, 15],
            [10, 1, 14, 4],
            [3, 2, 12, 20],
            [7, 5, 18, 11],
            [9, 8, 6, 13]
        ])
    });
});