const canFinish = (n, courses) => {
    const adjList = new Array(n)
        .fill(0)
        .map(() => []);
        
    for (let i = 0; i < courses.length; i++) {
        // console.log('courses', courses[i]);
        // console.log('courses index', i);
        adjList[courses[i][1]].push(courses[i][0]);
    }

    for (let v = 0; v < n; v++) {
        const queue = [];
        const seen = {};
        // setup the queue for each vertex
        for (let i = 0; i < adjList[v].length; i++) {
            queue.push(adjList[v][i]);
        }

        // begin the bfs traversal
        while (queue.length) {
            const current = queue.shift();
            seen[current] = true; // might already be true, but good to set it up front.
            if (current === v) return false; // base case essentially, if while iterating we found current equals our vertex we know we have a cycle.
            const adjacent = adjList[current]; // get the adjacent connections
            for (let i = 0; i < adjacent.length; i++) {
                const next = adjacent[i];
                if (!seen[next]) {
                    queue.push(next);
                }
            }
        }
    }

    return true;
};




describe('__tests__/graphs/canFinish', () => {
    describe('canFinish', () => {
        it('should return false', () => {
            expect(canFinish(7, [[0, 3], [1, 0], [2, 1], [5, 6], [4, 5], [6, 4]])).toEqual(false);
        });
        it('should return true', () => {
            expect(canFinish(7, [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]])).toEqual(true);
        });
    });
})