const PriorityQueue = require("../../src/PriorityQueue");

describe('__tests__/queues/priorityQueue.test.js', () => {
    it('should', () => {

        const pq = new PriorityQueue();
        pq.push(15);
        pq.push(12);
        pq.push(50);
        pq.push(7);
        pq.push(40);
        pq.push(22);

        expect(pq.pop()).toEqual(50);
        expect(pq.pop()).toEqual(40);
        expect(pq.pop()).toEqual(22);
        expect(pq.pop()).toEqual(15);
        expect(pq.pop()).toEqual(12);
        expect(pq.pop()).toEqual(7);
    });
});