const permutingTwoArrays = (k, A, B) => {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return 'NO';
        }
    }
    return 'YES';
}


describe('permutingTwoArrays', () => {
    it('should display yes', () => {
        expect(permutingTwoArrays(4, [1, 3], [3, 1])).toEqual('YES');
    });
    it('should display no', () => {
        expect(permutingTwoArrays(5, [2, 3, 1, 1, 1], [1, 3, 4, 3, 3])).toEqual('NO');
    });
    it('should display no', () => {
        expect(permutingTwoArrays(9, [1, 5, 1, 4, 4, 2, 7, 1, 2, 2], [8, 7, 1, 7, 7, 4, 4, 3, 6, 7])).toEqual('NO');
    });    
    it('should display no', () => {
        expect(permutingTwoArrays(9, [5, 1, 0, 1, 6, 4, 1, 7, 4, 3], [8, 7, 1, 7, 7, 4, 4, 3, 6, 7])).toEqual('NO');
    });    
    
    it('should display no', () => {
        expect(permutingTwoArrays(9, [4, 4, 3, 2, 1, 4, 4, 3, 2, 4], [2, 3, 0, 1, 1, 3, 1, 0, 0, 2])).toEqual('NO');
    });    
    it('should display yes', () => {
        expect(permutingTwoArrays(9, [3, 6, 8, 5, 9, 9, 4, 8, 4, 7], [5, 1, 0, 1, 6, 4, 1, 7, 4, 3])).toEqual('YES');
    });
});