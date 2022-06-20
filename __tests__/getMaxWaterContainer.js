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
    for (let p1 = 0; p1 < numbers.length; p1++) {
        for (let p2 = p1 + 1; p2 < numbers.length; p2++) {
            const maxArea = (numbers[p1] < numbers[p2] ? numbers[p1] : numbers[p2]) * (p2 - p1);
            existingMaxArea = existingMaxArea < maxArea ? maxArea : existingMaxArea;
        }
    }
    return existingMaxArea;
};



const getMaxWaterContainerPerformant = (numbers) => {
    let existingMaxArea = 0; 
    let p1 = 0;
    let p2 = numbers.length - 1;

    while (p1 < p2) {
        const height = Math.min(numbers[p1], numbers[p2]);
        const width = p2 - p1;
        const area = height * width;  
        existingMaxArea = Math.max(existingMaxArea, area); 
        if (numbers[p1] < numbers[p2]) { 
            p1++;
        } else {
            p2--;
        }

    }
    return existingMaxArea;
};


describe('getMaxWaterContainer', () => {
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

    it('should return 28, with following example', () => {
        const actual = getMaxWaterContainerPerformant([4, 8, 1, 2, 3, 9]);
        expect(actual).toEqual(32);
    });
});