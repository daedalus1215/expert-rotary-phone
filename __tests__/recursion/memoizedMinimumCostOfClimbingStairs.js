const minCostOfClimbingStairs = (steps) => {
    const seen = [];
    return Math.min(costOf(steps, steps.length - 1, seen), costOf(steps, steps.length - 2, seen));
};

const costOf = (steps, i, seen) => {
    if (i <= 0) {
        return 0
    }
    if (seen[i]) {
        return seen[i];
    }
    
    seen[i] = steps[i] + Math.min(costOf(steps, i - 1, seen), costOf(steps, i - 2, seen));
    return seen[i];
};

describe('minimumCostOfClimbingStairs.js', () => {
    it('should', () => {
        expect(minCostOfClimbingStairs([5, 30, 15, 10, 11, 10, 20, 34, 56])).toEqual(69);
    });
});