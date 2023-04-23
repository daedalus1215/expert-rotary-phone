
const snailTraversal = (arr, rowsCount, colsCount) => {
    if (rowsCount * colsCount !== arr.length) return -1; // invalid
    const results = new Array(rowsCount).fill([]).map(() => []);
    // console.log(results)
    return traversDown(-1, arr, rowsCount, colsCount, 0, results);
};

const traversDown = (currentIndex, arr, rowsCount, colsCount, currentCol, results) => {
    let newIndex = currentIndex+=1;
    for (let i = 0; i < rowsCount && newIndex < arr.length; i+=1) {
        console.log(currentCol)
        console.log(i)
        console.log(newIndex)
        results[i][currentCol] = arr[newIndex]
        console.log(results)
        newIndex+=1;
    }
    if (newIndex >= arr.length) return results;
    // if (currentCol+=1 < colsCount) {
    //     // return traverseUp(newIndex, arr, rowsCount, colsCount, currentCol+=1, results);
    // }
}

const traverseUp = (currentIndex, arr, rowsCount, colsCount, currentCol, results) => {
    let newIndex = currentIndex+=1;
    console.log(results)
    for (let i = rowsCount - 1; i >= 0 && newIndex < arr.length; i--) {
        console.log(currentCol)
        console.log(i)
        results[currentCol][i] = arr[newIndex]
        newIndex+=1;
    }
    if (newIndex >= arr.length) return results;
    if (currentCol+=1 < colsCount) {
        return traverseUp(newIndex, arr, rowsCount, colsCount, currentCol+=1, results);
    }
}

describe('', () => {
    it('', () => {
        console.log(snailTraversal([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15], 5, 4));
        // expect(snailTraversal([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15], 5, 4)).toEqual([
        //     [19, 17, 16, 15],
        //     [10, 1, 14, 4],
        //     [3, 2, 12, 20],
        //     [7, 5, 18, 11],
        //     [9, 8, 6, 13]
        // ])
    });
});