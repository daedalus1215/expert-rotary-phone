const minCostOfClimbingStairsAscOptimized = (steps) => {
    const dp = [];
    const length = steps.length;
    if (length === 0) return 0;
    if (length === 1) return steps[0];
    let first = 0;
    let second = steps[1];
    first = steps[0];

    for (let i = 2; i < length; i++) {
       const current = steps[i] + Math.min(steps[i - 1], steps[i - 2])
       first = second; 
       second = current;
    }

    return Math.min(first, second)
};

describe('minCostOfClimbingStairsAsc.js', () => {
    it('should...', () => {
        expect(minCostOfClimbingStairsAscOptimized([10, 15, 5, 30, 12, 35])).toEqual(17);
    });
});