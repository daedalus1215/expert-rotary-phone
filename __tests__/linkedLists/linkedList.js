
const reverseLinkedList = (node) => {
    let prev = null;
    let current = node;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

describe('linkedList', () => {
    it('reverseLinkedList', () => {
        const expected = { value: 3, next: { value: 2, next: { value: 1, next: null } } };
        const node = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: null
                }
            }
        }
        const actual = reverseLinkedList(node);
        expect(actual).toEqual(expected)
    });
});


