/**
 * You are given an array of numbers, each representing the height of a vertical line on a graph. 
 * A container can be formed with any pair of these lines, along iwth the x-axis of the graph. 
 * Return the amount of water which the largest container can hold.
 */

const trappingRainwater = (input: number[]) => {
    const recurse = (input: number[], left:number, right:number, max:number) => {
        const height = Math.min(input[left], input[right]);
        const area = height * (right - left);
        const newMax = Math.max(max, area);

        if (left >= right) {
            return newMax;
        }

        if (input[left] < input[right]) {
            return recurse(input, left+1, right, newMax);
        } else if (input[left] > input[right]) {
            return recurse(input, left, right-1, newMax);
        } else {
            return recurse(input, left+1, right-1, newMax);
        }
    }
    
    return input.length < 2 ? 0 : recurse(input, 0, input.length - 1, 0); 
};


describe('trappingRainwater', () => {
    it('should... ', () => {
        // Arrange
        const input = [];
        const expected = 0;

        // Act
        const actual = trappingRainwater(input);

        // Assert
        expect(actual).toEqual(expected)
    });
    it('should... ', () => {
        // Arrange
        const input = [1];
        const expected = 0;

        // Act
        const actual = trappingRainwater(input);
        
        // Assert
        expect(actual).toEqual(expected)
    });
    it('should... ', () => {
        // Arrange
        const input = [0, 1, 0];
        const expected = 0;

        // Act
        const actual = trappingRainwater(input);
        
        // Assert
        expect(actual).toEqual(expected)
    });
    it('should... ', () => {
        // Arrange
        const input = [3,3,3,3];
        const expected = 9;

        // Act
        const actual = trappingRainwater(input);
        
        // Assert
        expect(actual).toEqual(expected)
    });

    it('should... ', () => {
        // Arrange
        const input = [1,2,3];
        const expected = 2;

        // Act
        const actual = trappingRainwater(input);
        
        // Assert
        expect(actual).toEqual(expected)
    });

    it('should... ', () => {
        // Arrange
        const input = [3, 2, 1];
        const expected = 2;

        // Act
        const actual = trappingRainwater(input);
        
        // Assert
        expect(actual).toEqual(expected)
    });
});