/**
 * Given a partially completed 9x9Sudoku board, determine if the current state of the board adheres to the rules of the game:
 * Each row and column must contain unioque numbers between 1 and 9, or be empty (represented as 0).
 * Each of the nine 3x3 subgrids that compose the grid must contain unique numbers between 1 and 9 or empty. 
 */

type Board = number[][];
const verifySudokuBoard = (board: Board): boolean => {
    const rows = Array.from({length: 9}, () => new Set());
    const cols = Array.from({length: 9}, () => new Set());
    const subMatrix = Array.from({length:3}, () => Array.from({length: 3}, () => new Set()));

    for (let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            const num = board[i][j];
            
            if (num === 0) {
                continue;
            }

            if (num < 1 || num > 9) {
                return false;
            }

            const r = Math.floor(i / 3);
            const c = Math.floor(j / 3);

            if (rows[i].has(num)) {
                return false;
            } else if (cols[j].has(num)) {
                return false;
            } else if (subMatrix[r][c].has(num)) {
                return false;
            }

            rows[i].add(num);
            cols[j].add(num);
            subMatrix[r][c].add(num);
        }
    }

    return true;
};

describe('verifySudokuBoard', () => {
    const validBoard = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    const invalidBoard = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [5, 0, 0, 1, 9, 5, 0, 0, 0], // Notice the duplicate 5 in first column
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    it('should return true for a valid partially filled board', () => {
        expect(verifySudokuBoard(validBoard)).toBe(true);
    });

    it('should return false for an invalid board with duplicate in column', () => {
        expect(verifySudokuBoard(invalidBoard)).toBe(false);
    });
});