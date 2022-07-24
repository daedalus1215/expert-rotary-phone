const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];
const howManyDaysTillRot = matrix => {

};


describe('__tests__/matrix/rottingOranges.js', () => {
    describe('howManyDaysTillRot', () => {
        it('should...', () => {
            const matrix = [
                [1, 1, 0, 0, 0],
                [2, 1, 0, 0, 0],
                [0, 0, 0, 1, 2],
                [0, 0, 0, 0, 1]
            ];
            expect(countIsland(matrix)).toEqual(2);
        });

    }
    );

});