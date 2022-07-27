

const traversalBFS = (graph) => {
    const values = [];
    const seen = {};
    const queue = [0];

    while (queue.length) {
        const current = queue.shift();
        values.push(current)
        seen[current] = true;
        const connections = graph[current];
        for (let i = 0; i < connections.length; i++) {
            if (!seen[connections[i]]) {
                queue.push(connections[i])
            }
        }
    }

    return values;
};

describe('adjacentList', () => {
    it('', () => {
        const adjacencyList = [
            [1, 3],
            [0],
            [3, 8],
            [0, 2, 4, 5],
            [3, 6],
            [3],
            [4, 7],
            [6],
            [2]
        ];

        expect(traversalBFS(adjacencyList)).toEqual([
            0, 1, 3, 2, 4,
            5, 8, 6, 7
        ]);
    });
});