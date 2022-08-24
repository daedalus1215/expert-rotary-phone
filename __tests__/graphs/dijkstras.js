const PriorityQueue = require("../../src/PriorityQueue");

const dijkstras = (times, n, k) => {
    const distances = new Array(n).fill(Infinity);
    const adjList = distances.map(() => []);
    distances[k - 1] = 0;
    const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
    heap.push(k - 1);

    for (let i = 0; i < times.length; i++) {
        const source = times[i][0];
        const target = times[i][1];
        const weight = times[i][2];
        adjList[source-1].push([target-1, weight]);
    }

    while (!heap.isEmpty()) {
        const currentVertex = heap.pop();
        const adjacent = adjList[currentVertex];
        for (let i = 0; i < adjacent.length; i++) {
            const neighboringVertex = adjacent[i][0];
            const weight = adjacent[i][1]
            if (distances[neighboringVertex] > distances[currentVertex] + weight) {
                distances[neighboringVertex] = distances[currentVertex] + weight;
                heap.push(neighboringVertex);
            }
        }
    }

    const maxValue = Math.max(...distances);
    return maxValue === Infinity ? -1 : maxValue;
}


describe('dijkstras.js', () => {
    it('should return ', () => {
        expect(dijkstras([[1, 4, 2], [1, 2, 9], [4, 2, 4], [4, 5, 6], [5, 3, 7], [3, 2, 3], [3, 1, 5], [2, 5, 1]], 5, 1)).toEqual(14);
    });
});