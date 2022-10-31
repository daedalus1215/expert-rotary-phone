/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

 var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix[0].length; i++) {
        if (!dfs(0, i, matrix, matrix[0][i])) {
            return false;
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j <= i - 1; j++) {
            if(!dfs(i, j, matrix, matrix[i][j])) {
                return false;
            }
        }
    }
    
    return true;
};

function dfs(ypos, xpos, matrix, value) {
    console.log('value', value)
    console.log('ypos', ypos)
    console.log('ypos length', matrix.length)
    console.log('xpos', xpos)
    console.log('xpos length', matrix[0].length)
    
    if (ypos + 1 >= matrix.length || xpos + 1 >= matrix[0].length) {
        return true;
    }
    
    if (matrix[ypos + 1][xpos + 1] === value) {
        return dfs(ypos + 1, xpos + 1, matrix, value);
    }

    console.log('what')
    return false; 
}


describe('toeplitz matrix', () => {
    it('', () => {
        expect(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])).toEqual(true);
    });    
    it('', () => {
        expect(isToeplitzMatrix([[36,59,71,15,26,82,87],[56,36,59,71,15,26,82],[15,0,36,59,71,15,26]])).toEqual(false);
    });
});