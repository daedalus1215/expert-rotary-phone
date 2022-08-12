const topologicalSort = (n, prereq) => {
    const adjList = new Array(n).fill(0).map(() => []);
    const indegrees = new Array(n).fill(0);

    for (let i = 0; i < prereq.length; i++) {
        const dep = prereq[i][0];
        const dee = prereq[i][1];
        // console.log('adjList', adjList)
        // console.log('dep', dep)
        // console.log('dee', dee)
        adjList[dee].push(dep);
        indegrees[dep]++;
    }

    const stack = [];
    for (let i = 0; i < indegrees.length; i++) {
        if (indegrees[i] === 0) {
            stack.push(i);
        }
    }

    let count = 0;
    while (stack.length) {
        const current = stack.pop();
        count++;
        const adjacents = adjList[current];
        for (let i = 0; i < adjacents.length; i++) {
            const next = adjacents[i];
            indegrees[next]--;
            if (indegrees[next] === 0) {
                stack.push(next);
            }
        }
    }

    return n === count;
};


describe('__tests__/graphs/tropologicalSort.js', () => {
    describe('tropologicalSort', () => {
        it('should return true, if no cyclical deps and if length is long enough', () => {
            const prereq = [
                [1, 5],
                [0, 1],
                [2, 0],
                [4, 2],
                [4, 5], // non cyclical deps
                [3, 5],
                [3, 1],
            ];

            expect(topologicalSort(7, prereq)).toEqual(true);
        });

        it('should return false when there is a cyclical dep', () => {
            const prereq = [
                [1, 5],
                [0, 1],
                [2, 0],
                [4, 2],
                [5, 4], // this element causes cyclical deps
                [3, 5],
                [3, 1],
            ];

            expect(topologicalSort(7, prereq)).toEqual(false);
        });
    })
})