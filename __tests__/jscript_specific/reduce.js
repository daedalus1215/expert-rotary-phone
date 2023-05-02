const reduce = (nums, fn, init) => {
    if (nums.length === 0) return init;
    let result = init;
    for(let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result; 
};

describe('', () => {
    it('', () => {
        function sum(accum, curr) { return accum + curr; }
        expect(reduce([1, 2, 3, 4], sum, 0)).toEqual(10);
    });

    it('', () => {
        function sum(accum, curr) { return accum + curr * curr; }
        expect(reduce([1, 2, 3, 4], sum, 100)).toEqual(130);
    });

    it('', () => {
        function sum(accum, curr) { return 0; }
        expect(reduce([], sum, 25)).toEqual(25);
    });
});