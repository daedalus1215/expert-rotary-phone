
class ListNode {
    constructor(val, next = null, prev = null, child = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
        this.child = child;
    }
}

const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6]

const buildMultiLevel = function (nodes) {
    const head = new ListNode(nodes[0]);
    let currentNode = head;

    for (let i = 1; i < nodes.length; i++) {
        const val = nodes[i];
        let nextNode;

        if (Array.isArray(val)) {
            nextNode = buildMultiLevel(val);
            currentNode.child = nextNode;
            continue;
        }

        nextNode = new ListNode(val);
        currentNode.next = nextNode;
        nextNode.prev = currentNode;
        currentNode = nextNode;
    }

    return head;
}

let multiLinkedList = buildMultiLevel(nodes);

// ---- Generate our linked list ----

const printListMulti = head => {
    if (!head) {
        return;
    }

    // console.log(head.val)

    if (head.child) {
        printListMulti(head.child);
    }

    printListMulti(head.next);
}

const printList = head => {
    if (!head) {
        return;
    }

    // console.log(head.val);

    printList(head.next);
}


var flatten = function (head) {
    if (!head) return head;
    let current = head;
    while (current !== null) {
        if (current.child === null) {
            current = current.next;
        } else {
            let childPrev = current.child;
            while (childPrev.next !== null) {
                childPrev = childPrev.next;
            }

            childPrev.next = current.next;
            if (childPrev.next !== null) {
                childPrev.next.prev = childPrev;
            }

            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        }
    }

    return head;
};




describe('doublyLinkedList', () => {
    it('', () => {
        printListMulti(multiLinkedList);
        // console.log('after flatten');
        printList(flatten(multiLinkedList));
    });
});