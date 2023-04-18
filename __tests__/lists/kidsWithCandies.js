const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies);
    const results = [];
    for (candy in candies) {
        if ((candies[candy] + extraCandies) >= max) {
            results.push(true);
        } else {
            results.push(false);
        }
    }

    return results;
};


describe('kidsWithCandies', () => {
    it('', () => {
        expect(kidsWithCandies([4, 2, 1, 1, 2], 1))
            .toEqual([true, false, false, false, false]);
    })
});