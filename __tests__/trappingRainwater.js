
/**
 * 
 * @param {Number[]} nums 
 * @return Number
 */
const trappingRainwaterBruteForce = (nums) => {
    let totalWater = 0;
    let pointer = 0;
    let maxL = 0;
    let maxR = 0;

    while (pointer < nums.length) {



        pointer++;
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