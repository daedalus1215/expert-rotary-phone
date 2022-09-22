/**
 * 
 * @param {Array} array 
 * @param {*} v 
 * @returns 
 */
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
}



describe('binarySearch', () => {
    it('should return 4, when value is 5 in the following array.', () => {
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 5)).toEqual(4);
    });
})