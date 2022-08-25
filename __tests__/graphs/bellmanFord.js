const bellmanFord = (k, times, n) => {
    // k = 1
    // n = 5
    // times = [[1,4,2], [4,2,-4], [4,5,6], [5,3,7], [3,1,5], [1,2,9], [2,5,-3], [3,2,3]]
    let distances = new Array(n).fill(Infinity);
    distances[k - 1] = 0;

    let count = 0;
    while (count < n - 1) {
        for (let i = 0; i < times.length; i++) {
            const source = times[i][0],
                target = times[i][1],
                weight = times[i][2];
            const currentWeight = distances[source - 1] + weight;

            if (currentWeight < distances[target - 1]) {
                distances[target - 1] = currentWeight;
            }
        }
        count++;
    }
    const maxValue = Math.max(...distances);
    return maxValue === Infinity ? -1 : maxValue;
};


describe('bellmanFord.js', () => {
    it('should return 2', () => {
        expect(bellmanFord(1, [[1, 4, 2], [4, 2, -4], [4, 5, 6], [5, 3, 7], [3, 1, 5], [1, 2, 9], [2, 5, -3], [3, 2, 3]], 5)).toEqual(2)
    });
});