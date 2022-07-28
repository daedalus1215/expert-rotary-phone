const dfsTraversal = (graph) => {
    const seen = { 0: true } // s = o(rows)
    const values = [0];      // s = o(row * col)
    for (let i = 0; i < graph.length; i++) { // t = o(rows)
        const connections = graph[i];
        dfs(connections, seen, values, graph);
    }
    return values;
};

const dfs = (vertex, seen, values, graph) => {
    for (let i = 0; i < vertex.length; i++) { // t = o(col)
        if(seen[vertex[i]]) {
            continue;
        }
        values.push(vertex[i]);
        seen[vertex[i]] = true;
        dfs(graph[vertex[i]], seen, values, graph)
    }
};

describe('__tests__/graphs/dfsTraversal', () => {
    it('dfsTraversal', () => {
        const graph = [
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
        expect(dfsTraversal(graph)).toEqual([
            0, 1, 3, 2, 8,
            4, 6, 7, 5
        ]);
    });
});