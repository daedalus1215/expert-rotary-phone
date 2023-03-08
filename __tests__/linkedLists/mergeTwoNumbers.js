
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2;

    let mergedNodes = new ListNode(0, null);
    let curr = mergedNodes;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        console.log(curr)
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return mergedNodes.next;
};

describe('mergeTwoLists', () => {
    it('', () => {
        // Arrange

        // Act
        const actual = mergeTwoLists(
            new ListNode(1, new ListNode(2, new ListNode(4))),
            new ListNode(1, new ListNode(3, new ListNode(4)))
        );

        console.log('actual', actual)
        // Assert
        expect(actual).toEqual(
            {
                "next": {
                    "next": {
                        "next": {
                            "next": {
                                "next": {
                                    "next": null,
                                    "val": 4,
                                },
                                "val": 4,
                            },
                            "val": 3,
                        },
                        "val": 2,
                    },
                    "val": 1,
                },
                "val": 1,
            }
        );
    });

    it('', () => {
        // Arrange

        // Act
        const actual = mergeTwoLists(
            null,
            null
        );

        console.log('actual', actual)
        // Assert
        expect(actual).toEqual(null);
    });

    it('', () => {
        // Arrange

        // Act
        const actual = mergeTwoLists(
            null,
            new ListNode(0)
        );

        console.log('actual', actual)
        // Assert
        expect(actual).toEqual({ "next": null, "val": 0 });
    });
});
