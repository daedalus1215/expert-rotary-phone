
/**
 * 
 * @param {Number[]} nums 
 * @return Number
 */
const trappingRainwaterBruteForce = (nums) => {
    let totalWater = 0;

    for (let p = 0; p < nums.length; p++) {
        let leftP = p;
        let rightP = p;
        let maxL = 0;
        let maxR = 0;

        while (leftP >= 0) {
            maxL = Math.max(maxL, nums[leftP]);
            leftP--;
        }

        while (rightP < nums.length) {
            maxR = Math.max(maxR, nums[rightP]);
            rightP++;
        }

        const currentWater = Math.min(maxL, maxR) - nums[p];

        if (currentWater > 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;
};


describe('trappingRainwater', () => {
    describe('trappingRainwaterBruteForce', () => {
        it('should return 8 with the given array', () => {
            const actual = trappingRainwaterBruteForce([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);

            expect(actual).toEqual(8);
        });
    });
});