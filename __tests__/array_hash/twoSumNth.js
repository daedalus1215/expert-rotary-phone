/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // iterate over both ends of nums
    // left = 0, right = nums.length -1;
    // while (left < right) {}
    // const leftV = target - nums[left];
    // if (hash[leftV]) {}
    // 
    // const rightV = target - nums[right];
    // hash[leftV] = left;
    // hash[rightV] = right;
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hash[complement] !== undefined) {
            return [hash[complement], i];
        }
        
        hash[nums[i]] = i;
    }
};



describe('', () => {
    it('', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    });    
    it('', () => {
        expect(twoSum([-1,-2,-3,-4,-5], -8)).toEqual([2,4])
    });    
    it('', () => {
        expect(twoSum([-10,7,19,15], 9)).toEqual([0, 2])
    });
});