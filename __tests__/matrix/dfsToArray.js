const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];

const matrixToArray = (matrix) => {
    const seen = new Array(matrix.length)
        .fill(0).map(() => new Array(matrix[0].length)
            .fill(false));
    const values = [];
    dfs(matrix, 0, 0, seen, values);
    return values;
}

const dfs = (matrix, row, col, seen, values) => {
    if (row >= matrix.length
        || row < 0
        || col >= matrix[0].length
        || col < 0
        || seen[row][col]) {
        return true;
    }
    values.push(matrix[row][col]);
    seen[row][col] = true;

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        dfs(matrix, row + direction[0], col + direction[1], seen, values);
    }
}

describe('matrixToArray', () => {
    it('', () => {
        const matrix = [
            [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18],
            [20, 21, 22, 23, 24, 25]
        ];

        expect(matrixToArray(matrix)).toEqual([1, 2, 3, 4, 5, 6, 12, 18, 25, 24, 17, 11, 10, 16, 23, 22, 15, 9, 8, 14, 21, 20, 13, 7]);
    })

});