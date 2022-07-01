
/**
 * 
 * @param {Number[]} nums 
 * @return Number
 */
const trappingRainwaterBruteForce = (nums) => { // 0
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

const trappingRainwaterPerformance = nums => {
    let p1 = 0, p2 = nums.length - 1, left = 0, right = 0, total = 0;

    while (p1 < p2) {
        if (nums[p1] < nums[p2]) {
            if (left > nums[p1]) {
                total += left - nums[p1];
            } else {
                left = nums[p1];
            }
            p1++;
        } else {
            if (right > nums[p2]) {
                total += right - nums[p2];
            } else {
                right = nums[p2];
            }
            p2--;
        }
    }

    return total;
}



describe('trappingRainwater', () => {
    describe('trappingRainwaterBruteForce', () => {
        it('should return 8 with the given array', () => {
            const actual = trappingRainwaterBruteForce([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);

            expect(actual).toEqual(8);
        });
    });

    describe('trappingRainwaterPerformance', () => {
        it('should return 8 with the given array', () => {
            const actual = trappingRainwaterPerformance([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);

            expect(actual).toEqual(8);
        });
    });
});