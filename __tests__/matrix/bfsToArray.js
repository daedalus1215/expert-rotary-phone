const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]

const bfsToArray = matrix => {
    const queue = [[0, 0]];
    const values = [];
    const seen = new Array(matrix.length)
        .fill(0).map(() => new Array(matrix[0].length)
            .fill(false));

    while (queue.length) {
        const currentPos = queue.shift();
        const row = currentPos[0];
        const col = currentPos[1];

        if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
            continue;
        }

        seen[row][col] = true;
        values.push(matrix[row][col]);

        for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            queue.push([row + currentDir[0], col + currentDir[1]])
        }
    }

    return values;
}


describe('matrixToArray', () => {
    it('', () => {
        expect(bfsToArray([
            [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18],
            [20, 21, 22, 23, 24, 25]
        ]))
            .toEqual([1, 2, 7, 3, 8, 13, 4, 9, 14, 20, 5, 10, 15, 21, 6, 11, 16, 22, 12, 17, 23, 18, 24, 25]);
    })
});