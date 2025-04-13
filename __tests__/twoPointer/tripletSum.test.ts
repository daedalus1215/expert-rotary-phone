// Given an array of integers, return all triplets [a, b, c] 
// such that a + b + c = 0. 
// The solution must not contain duplicate triplates (e.g., [1, 2, 3] and [2, 3, 1] are considered
// duplicate triplets). If no such triplets are found, return an empty array.

// Each triplet can be arranged in any order, and the output can be returned in any order.

// Example:
// Input: nums = [0, -1, -2, -3, 1]
// Output: [[-3, 1, 2], [-1, 0, 1]]

const tripletSumBruteForce = (input: number[]): number[][] => {
    if (!input || input.length < 3) {
        return [];
    }

    const results:Set<string> = new Set();
    for(let i = 0; i < input.length; i++) {
        for (let j = i+1; j < input.length; j++) {
            if (input[i] !== 0 && input[i] === input[j]) continue;
            for (let k = j+1; k < input.length; k++) {
                if (input[j] !== 0 && input[j] === input[k]) continue;
                if (input[i] + input[j] + input[k] === 0) {
                    const valid = [input[i], input[j], input[k]].sort((a, b) => a - b);
                    results.add(JSON.stringify(valid));
                }
            }
        }
    }

    return Array.from(results)
    .map((triplet) => JSON.parse(triplet)) 
    .sort((a: number[], b: number[]) => a[0] - b[0]);
}

const sumPair = (input: number[], target: number):number[] | undefined => {
    if (!input) {
        return;
    }
    let left = target + 1;
    let right = input.length - 1;
    
    while(left <= right) {
        if (input[left] === input[target]) {
            left++;
        } else if (input[right] ===  input[target]) {
            right--;
        }

        const total = input[left] + input[right] + input[target];
        console.log('totaleee', total)
        if (total === 0) {
            return [input[left], input[right], input[target]]
        } else if (total > 0) {
            right--;
        } else if (total < 0) {
            left++;
        }
    }
    return;
}

const tripletSum = (inputs: number[]) => {
    const results: Set<string> = new Set();

    const sorted = inputs.sort((a,b )=> a - b)
    console.log('sorted', sorted)
    for (let i = 0; i < sorted.length; i++) {
        if(sorted[i] !== 0 && sorted[i] === sorted[i-1]) {
            continue;
        }
        const pair = sumPair(sorted, i)
        if (pair) {
            results.add(JSON.stringify((pair.map(item => item)).sort((a,b) => a - b)));
        }
    }

    return Array.from(results).map(items => JSON.parse(items));
};


describe('tripletSum', () => {
    describe('#tripletSumBruteForce', () => {
        it('should return 2 arrays ', () => {
            // Arrange
            const input = [0, -1, 2, -3, 1];
            const expected = [[-3, 1, 2], [-1, 0, 1]]

            // Act
            const actual = tripletSumBruteForce(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });

        it('should return empty array when given ineligible array', () => {
            // Arrange
            const input = [0];
            const expected = []

            // Act
            const actual = tripletSumBruteForce(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });

        it('should return empty array when given ineligible array ', () => {
            // Arrange
            const input = [1, -1];
            const expected = []

            // Act
            const actual = tripletSumBruteForce(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });


        it('should return [0,0,0] when given [0,0,0]', () => {
            // Arrange
            const input = [0,0,0];
            const expected = [[0,0,0]]

            // Act
            const actual = tripletSumBruteForce(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });


        it('should return empty array when given [1, 0, 1]', () => {
            // Arrange
            const input = [1, 0, 1];
            const expected = []

            // Act
            const actual = tripletSumBruteForce(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });


        it('should return valid array when given a valid array', () => {
            // Arrange
            const input = [0, 0, 1, -1, 1, -1];
            const expected = [[-1, 0, 1]]

            // Act
            const actual = tripletSumBruteForce(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });
    });




    describe('#tripletSum', () => {
        it('should return 2 arrays ', () => {
            // Arrange
            const input = [0, -1, 2, -3, 1];
            const expected = [[-3, 1, 2], [-1, 0, 1]]

            // Act
            const actual = tripletSum(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });

        it('should return empty array when given ineligible array', () => {
            // Arrange
            const input = [0];
            const expected = []

            // Act
            const actual = tripletSum(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });

        it('should return empty array when given ineligible array ', () => {
            // Arrange
            const input = [1, -1];
            const expected = []

            // Act
            const actual = tripletSum(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });


        it('should return [0,0,0] when given [0,0,0]', () => {
            // Arrange
            const input = [0,0,0];
            const expected = [[0,0,0]]

            // Act
            const actual = tripletSum(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });


        it('should return empty array when given [1, 0, 1]', () => {
            // Arrange
            const input = [1, 0, 1];
            const expected = []

            // Act
            const actual = tripletSum(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });


        it('should return valid array when given a valid array', () => {
            // Arrange
            const input = [0, 0, 1, -1, 1, -1];
            const expected = [[-1, 0, 1]]

            // Act
            const actual = tripletSum(input);
            
            // Assert
            expect(actual).toEqual(expected);
        });
    });

});