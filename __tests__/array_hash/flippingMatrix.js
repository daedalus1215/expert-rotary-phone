function flippingMatrix(matrix) {
    // Write your code here
    let n = matrix.length / 2;
    let max;
    let total = 0;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            const left = matrix[x][y];
            const right = matrix[x][matrix.length - 1 - y]
            const  botLeft = matrix[matrix.length - 1 - x][y]
            const  botRight = matrix[matrix.length - 1 - x][matrix.length - 1 - y]
            console.log('left', left)
            console.log('right', right)
            console.log('botLeft', botLeft)
            console.log('botRight', botRight)

            max = Math.max(
                matrix[x][y],
                matrix[x][matrix.length - 1 - y],
                matrix[matrix.length - 1 - x][y],
                matrix[matrix.length - 1 - x][matrix.length - 1 - y]
            );

            total += max;
        }
    }

    return total;
}


describe('flippingMatrix', () => {
    it('', () => {
        expect(flippingMatrix([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]])).toEqual(414);
    });
});