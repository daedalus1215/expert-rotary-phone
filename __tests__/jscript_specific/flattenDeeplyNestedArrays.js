/**
 * This is not very optimized.
 * @param {any[]} arr 
 * @param {number} depth
 */
const flat = (arr, depth) => {
    if (depth === 0) return arr;
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if (Array.isArray(arr[i])) {
            res.push(...flat(arr[i], depth - 1))
        } else {
            res.push(arr[i]);
        }
    }
    console.log('fin', res)
    return res;
};


describe('', () => {
    it('', () => {
        expect(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)).toEqual([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]);
    });

    it('', () => {
        expect(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]);
    });
});