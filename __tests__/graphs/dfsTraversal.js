

const dfsTraversal = (n, managers, timeInterval) => {
    const adjList = managers.map(() => []);
    for (let employee = 0; employee < managers.length; employee++) {
        if (managers[employee] === -1) continue;
        adjList[managers[employee]].push(employee);
    }
    return dfs(n, adjList, timeInterval);
};

const dfs = (index, adjList, timeInterval) => {
    if (adjList[index].length == 0) return 0;
    const employees = adjList[index];
    let max = 0;
    for (let i = 0; i < employees.length; i++) {
        max = Math.max(max, dfs(employees[i], adjList, timeInterval))
    }
    return max + timeInterval[index];
};

describe('__tests__/graphs/dfsTraversal', () => {
    it('dfsTraversal', () => {
        const headOfCompany = 4;
        const timeInterval = [0, 0, 4, 0, 7, 3, 6, 0];
        const managers = [2, 2, 4, 6, -1, 4, 4, 5];
        expect(dfsTraversal(headOfCompany, managers, timeInterval)).toEqual(13);
    });
});