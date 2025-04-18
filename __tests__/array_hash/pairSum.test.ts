/**
 * Given an array of integers, return the indexes of any two numbers that add up to a target. 
 * The order of the indexes in the result doesn't matter. If no pair is found, return an empoty array.
 * 
 */
const pairSum = (inputs: number[], target: number) => {
    if (inputs.length < 2) {
        return [];
    }

    const seen =  {};

    for(let i = 0; i < inputs.length; i++) {
        const value = inputs[i];
        const iteration = target - value;
        if (seen[iteration.toString()] !== undefined) {
            return [seen[iteration], i]
        }

        seen[value] = i;
    }

    return [];
}

describe('pairSum', () => {
    it('', () => {
        // Arrange
        const input = [-1, 3, 4, 2];
        const target = 3;
        const expected = [0, 2];

        // Act
        const actual = pairSum(input, target);
        
        // Assert
        expect(actual).toEqual(expected);
    });

    it('', () => {
        expect(pairSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    });    
    it('', () => {
        expect(pairSum([-1,-2,-3,-4,-5], -8)).toEqual([2,4])
    });    
    it('', () => {
        expect(pairSum([-10,7,19,15], 9)).toEqual([0, 2])
    });
});
