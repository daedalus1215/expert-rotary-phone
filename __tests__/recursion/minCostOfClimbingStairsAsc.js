const minCostOfClimbingStairsAsc = (steps) => {
    const dp = [];
    let first = 0;
    let second = 0;
    const length = steps.length;
    if (length === 0) return 0;
    if (length === 1) return steps[0];
    for (let i = 0; i < length; i++) {
        if (i === 0) {
            first = steps[i];
        } 
        if (i === 1) {
            second = steps[i];
        }
         else {
             dp[i] = steps[i] + Math.min(steps[i - 1], steps[i - 2])

         }
    }

    return Math.min(dp[length - 1], dp[length - 2])
};

describe('minCostOfClimbingStairsAsc.js', () => {
    it('should...', () => {
        expect(minCostOfClimbingStairsAsc([10, 15, 5, 30, 12, 35])).toEqual(17);
    });
});