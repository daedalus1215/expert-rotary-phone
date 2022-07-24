const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];
const howManyDaysTillRot = matrix => {
    let { infected, freshFruit } = findInfectedAndFreshFruit(matrix);
    let days = -1; // started off with negative one, because count was off. 
    while (infected.length > 0) {
        let ogSize = infected.length;
        days++;
        while (ogSize > 0) {
            const rot = infected.shift();

            for (let i = 0; i < directions.length; i++) {
                const currentPos = [rot[0] + directions[i][0], rot[1] + directions[i][1]];
                const currentRow = currentPos[0];
                const currentCol = currentPos[1];
                if (currentRow < matrix.length
                    && currentRow >= 0
                    && currentCol < matrix[0].length
                    && currentCol >= 0
                    && matrix[currentRow][currentCol] === 1) {
                    matrix[currentRow][currentCol] = 2;
                    infected.push([currentRow, currentCol]);
                    freshFruit--;
                }
            }
            ogSize--;
        }
    }

    if (freshFruit > 0) {
        return -1;
    }

    return days;
};

const findInfectedAndFreshFruit = (matrix) => {
    const infected = [];
    let freshFruit = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            const value = matrix[row][col];
            if (value === 2) {
                infected.push([row, col]);
            }
            if (value === 1) {
                freshFruit++;
            }
        }
    }

    return {
        infected,
        freshFruit
    };
}

describe('__tests__/matrix/rottingOranges.js', () => {
    describe('howManyDaysTillRot', () => {
        it('should...', () => {
            const matrix = [
                [1, 1, 0, 0, 0],
                [2, 1, 0, 0, 0],
                [0, 0, 0, 1, 2],
                [0, 0, 0, 0, 1]
            ];
            expect(howManyDaysTillRot(matrix)).toEqual(2);
        });
        it('should...', () => {
            const matrix = [
                [1, 1, 0, 0, 0],
                [2, 1, 0, 0, 0],
                [0, 0, 0, 1, 2],
                [0, 1, 0, 0, 1]
            ];
            expect(howManyDaysTillRot(matrix)).toEqual(-1);
        });
        it('should...', () => {
            const matrix = [
                [2, 1],
            ];
            expect(howManyDaysTillRot(matrix)).toEqual(1);
        });

        it('should...', () => {
            const matrix = [
                [2, 1, 1, 0, 0],
                [1, 1, 1, 0, 0],
                [0, 1, 1, 1, 1],
                [0, 1, 0, 0, 1]
            ];
            expect(howManyDaysTillRot(matrix)).toEqual(7);
        });
    });

});