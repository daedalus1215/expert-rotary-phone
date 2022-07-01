const reverseBetween = (head, m, n) => {
    let currentPos = 1,
        start = head,
        currentNode = head;

    while (currentPos < m) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null,
        tail = currentNode;
    while (currentPos >= m && currentPos <= n) {
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }

    start.next = newList;
    tail.next = currentNode;

    if (m > 1) {
        return head;
    } else {
        return newList;
    }
};


class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

describe('linkedListMNReversals', () => {
    it('reverseBetween', () => {
        const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
        const actual = reverseBetween(linkedList, 1, 6);
        expect(actual).toEqual({ "next": { "next": { "next": { "next": { "next": { "next": { "next": { "next": null, "val": 8 }, "val": 7 }, "val": 1 }, "val": 2 }, "val": 3 }, "val": 4 }, "val": 5 }, "val": 6 });
    });
})



