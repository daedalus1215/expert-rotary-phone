const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];

/**
 * Sequential, and bfs in support.
 * 
 */
/**
 * 
 * @param {Array} matrix 
 */
const countIsland = (matrix) => {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return []
    }

    let islandCount = 0;

    const queue = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 1) {
                queue.push([row, col]);
                islandCount++;
                matrix[row][col] = 0;
                while (queue.length) {
                    const newPos = queue.shift();
                    const newRow = newPos[0];
                    const newCol = newPos[1];
                    matrix[newRow][newCol] = 0;
                    for (let i = 0; i < directions.length; i++) {
                        const checkRow = newRow + directions[i][0];
                        const checkCol = newCol + directions[i][1];
                        console.log('checkRow', checkRow)
                        console.log('checkCol', checkCol)
                        if (checkRow !== -1 && checkCol !== -1 && checkRow < matrix.length && checkCol < matrix[0].length) {
                            console.log('matrix', matrix[checkRow][checkCol])
                            if (matrix[checkRow][checkCol] === 1) {
                                queue.push([checkRow, checkCol]);

                            }
                        }

                    }
                }
            }
        }
    }

    return islandCount;
}

describe('__tests__/matrix/countIsland.js', () => {
    it('should...', () => {
        const matrix = [
            [1, 1, 1, 1, 0],
            [1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1],
            [0, 0, 0, 1, 1]
        ];
        expect(countIsland(matrix)).toEqual(2);
    });

    it('should...', () => {
        const matrix = [
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [0, 1, 1, 1, 0],
            [1, 0, 1, 0, 1]
        ];
        expect(countIsland(matrix)).toEqual(7);
    });
});