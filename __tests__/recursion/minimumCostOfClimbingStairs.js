const minCostOfClimbingStairs = (steps) => {
    return Math.min(costOf(steps, steps.length - 1), costOf(steps, steps.length - 2));
};

const costOf = (steps, i) => {
    if (i <= 0) {
        return 0
    }
    return steps[i] + Math.min(costOf(steps, i - 1), costOf(steps, i - 2));
};

describe('minimumCostOfClimbingStairs.js', () => {
    it('should', () => {
        expect(minCostOfClimbingStairs([5, 30, 15, 10,11])).toEqual(25);
    });
});