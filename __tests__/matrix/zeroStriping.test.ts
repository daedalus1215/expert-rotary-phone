/**
 * For each zero in an m x n matrix, set its entire row and column to zero in place.
 */


const zeroStriping = (matrix: number[][]) => {
    if (!matrix || matrix?.length <= 0|| matrix[0]?.length <= 0) {
        return;
    }
    const m = matrix.length;
    const n = matrix[0].length ; 

    const rows = new Set();
    const cols = new Set();

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] === 0) {
                rows.add(r);
                cols.add(c);
            }
        }
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (rows.has(r) || cols.has(c)) {
                matrix[r][c] = 0;
            }
        }
    }
}

describe('zeroStriping', () => {
    const target = zeroStriping;

    it('should handle empty matrix', () => {
        const matrix: number[][] = [];
        target(matrix);
        expect(matrix).toEqual([]);
    });

    it('should not modify matrix with no zeros', () => {
        const matrix = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];
        target(matrix);
        expect(matrix).toEqual([
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ]);
    });

    it('should zero out row and column for single zero', () => {
        const matrix = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ];
        target(matrix);
        expect(matrix).toEqual([
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1]
        ]);
    });

    it('should handle multiple zeros', () => {
        const matrix = [
            [1, 0, 1],
            [1, 1, 1],
            [1, 1, 0]
        ];
        target(matrix);
        expect(matrix).toEqual([
            [0, 0, 0],
            [1, 0, 0],
            [0, 0, 0]
        ]);
    });

    it('should handle matrix with all zeros', () => {
        const matrix = [
            [0, 0],
            [0, 0]
        ];
        target(matrix);
        expect(matrix).toEqual([
            [0, 0],
            [0, 0]
        ]);
    });

    it('should handle non-square matrix', () => {
        const matrix = [
            [1, 1, 1, 1],
            [1, 0, 1, 1],
            [1, 1, 1, 1]
        ];
        target(matrix);
        expect(matrix).toEqual([
            [1, 0, 1, 1],
            [0, 0, 0, 0],
            [1, 0, 1, 1]
        ]);
    });
});

