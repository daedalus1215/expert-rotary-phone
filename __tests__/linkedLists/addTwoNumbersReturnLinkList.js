class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    console.log(l1)
    console.log(l2)
    let result = null;
    let init = null;
    let count = 0;

    while (l1.val !== null || l2.val !== null || count > 0) {
        const tots = (l1?.val ? l1.val : 0) + (l2?.val ? l2.val : 0) + count;
        console.log('tots', tots);
        const copy = tots.toString();
        console.log('tots.length', copy.length)
        count = copy.length > 1 ? parseInt(copy[0]) : 0;
        console.log('count', count)

        const v = copy.length > 1 ? parseInt(copy[1]) : tots;
        console.log('v', v)
        if (result != null) {
            console.log('existing result', result)
            result.next = new ListNode(v);
            // result = result.next;
            result = result.next;
            console.log('new result', result)
        } else {
            result = new ListNode(v)
            init = result;
            // console.log('result', result)
        }


        // result.push(copy.length > 1 ? parseInt(copy[1]) : tots);
        console.log(result);
        l1 = l1?.next ? l1.next : { val: null };
        l2 = l2?.next ? l2.next : { val: null };
    }

    return init;
};


describe('addNumbers', () => {
    it('should...', () => {
        // console.log(new ListNode(2, new ListNode(4, new ListNode(3, null))));
        expect(
            addTwoNumbers(
                new ListNode(2, new ListNode(4, new ListNode(3, null))),
                new ListNode(5, new ListNode(6, new ListNode(4, null)))))
            .toEqual({ "next": { "next": { "next": null, "val": 8 }, "val": 0 }, "val": 7 })
    });

    it('should...', () => {
        // console.log(new ListNode(2, new ListNode(4, new ListNode(3, null))));
        expect(
            addTwoNumbers(
                new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))))))),
                new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))))))
            .toEqual({ "next": { "next": { "next": { "next": { "next": { "next": { "next": { "next": null, "val": 1 }, "val": 0 }, "val": 0 }, "val": 0 }, "val": 9 }, "val": 9 }, "val": 9 }, "val": 8 })
    });
});