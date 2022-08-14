const PriorityQueue = require("../../src/PriorityQueue");

const work = (times, n, k) => {
    const distances = new Array(n).fill(Infinity);
    const adjList = distances.map(() => []);
    distances[k - 1] = 0; // we are starting here
    const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
    heap.push(k - 1);

    for (let i = 0; i < times.length; i++ ) {
        const source = times[i][0];
        const target = times[i][1];
        const weight = times[i][2];
        adjList[source].push([target,weight]);
    }

    while(!heap.isEmpty()) {
        const currentVertex = heap.pop();
        const adjacent = adjlist[currentVertex];
        for(let i = 0; i < adjacent.length; i++) {
            const neighboringVertex = adjacent[i][0]
            
        }
    }
}