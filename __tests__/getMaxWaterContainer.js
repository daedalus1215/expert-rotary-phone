/**
 * Take an array of numbers and find the max area for the cups made out of the lengths.
 * @param {Number[]} numbers 
 * @returns 
 */
const getMaxWaterContainer = (numbers) => {
    if (numbers.length === 0 || numbers.length === 1) {
        return 0;
    }

    let existingMaxArea = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const maxArea = (numbers[i] < numbers[j] ? numbers[i] : numbers[j]) * (j - i);
            existingMaxArea = existingMaxArea < maxArea ? maxArea : existingMaxArea;
        }
    }
    return existingMaxArea;
};

describe('cup_brute_force', () => {
    it('should return null, when array is not long enough', () => {
        const actual = getMaxWaterContainer([]);
        expect(actual).toEqual(0);
    });
    it('should return null, when array is not long enough', () => {
        const actual = getMaxWaterContainer([1]);
        expect(actual).toEqual(0);
    });

    it('should return 28, with following example', () => {
        const actual = getMaxWaterContainer([7, 1, 2, 3, 9]);
        expect(actual).toEqual(28);
    });    
    it('should return 28, with following example', () => {
        const actual = getMaxWaterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]);
        expect(actual).toEqual(49);
    });
});