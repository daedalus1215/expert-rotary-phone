
/**
 * 
 * @param {Number[]} theArray The array of numbers
 * @param {Number} theTarget the target number we want to find.
 * @returns null| Number[]
 */
const twoPointer = (theArray, theTarget) => {
    if (theArray.length === 0 || theArray.length === 1) {
        return null;
    }

    for (let i = 0; i < theArray.length; i++) {
        for (let j = i; j < theArray.length; j++) {
            const result = theArray[i] + theArray[j];
            if (result === theTarget) {
                return [i, j];
            }
        }
    }

    return null;
}

describe('two_pointer', () => {
    it('should return null if array is empty', () => {
        // Arrange

        // Act
        const actual = twoPointer([], 12);

        // Assert
        expect(actual).toEqual(null);
    });

    it('should return null if array has 1 index', () => {
        // Arrange

        // Act
        const actual = twoPointer([1], 12);

        // Assert
        expect(actual).toEqual(null);
    });

    it('should return null if array has 1 index', () => {
        // Arrange

        // Act
        const actual = twoPointer([1,2], 12);

        // Assert
        expect(actual).toEqual(null);
    });

    it('should return the index', () => {
        // Arrange

        // Act
        const actual = twoPointer([10, 2], 12);

        // Assert
        expect(actual).toEqual([0,1]);
    });


    it('should return the index', () => {
        // Arrange

        // Act
        const actual = twoPointer([1, 2, 10], 12);

        // Assert
        expect(actual).toEqual([1, 2]);
    });


    it('should return the index', () => {
        // Arrange

        // Act
        const actual = twoPointer([1, 2, 9, 2, 6, 4, 100, 10], 12);

        // Assert
        expect(actual).toEqual([1, 7]);
    });
});