const binarySearch = (nums, k) => {
    let left = 0,
        right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const value = nums[mid];
        if(value === k) {
            return mid;
        }
         else if (value >k) {
            right -= mid;
         } else {
            left += mid;
         }
    }

    return -1;
};

describe('binarySearch', () => {
    it('should return 4, when value is 5 in the following array.', () => {
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 5)).toEqual(4);
    });
})