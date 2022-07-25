const GATE = 0;
const WALL = -1;

const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];

const roomsAndGates = m => {
    const matrix = m;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === GATE) {
                dfs(matrix, 1, row - 1, col);
                dfs(matrix, 1, row, col + 1);
                dfs(matrix, 1, row + 1, col);
                dfs(matrix, 1, row, col - 1);
            }
        }
    }


    return matrix;
}

const dfs = (matrix, step, row, col) => {
    console.log('dfs - step', step)
    console.log('dfs - row', row)

    if (row >= 0
        && row < matrix.length
        && col >= 0
        && col < matrix[0].length
        && matrix[row][col] !== GATE
        && matrix[row][col] !== WALL
        && matrix[row][col] > step
    ) {
        matrix[row][col] = step;

        for (let i = 0; i < directions.length; i++) {
            dfs(matrix, step + 1, row + directions[i][0], col + directions[i][1])
        }
    }
}

describe('roomsAndGates', () => {
    it('should', () => {
        expect(roomsAndGates([
            [Infinity, -1, 0, Infinity],
            [Infinity, Infinity, Infinity, -1],
            [Infinity, -1, Infinity, -1],
            [0, -1, Infinity, Infinity]
        ])).toEqual(
            [
                [
                    3,
                    -1,
                    0,
                    1,
                ],
                [
                    2,
                    2,
                    1,
                    -1,
                ],
                [
                    1,
                    -1,
                    2,
                    -1,
                ],
                [
                    0,
                    -1,
                    3,
                    4,
                ]
            ]
        );
    });
});
