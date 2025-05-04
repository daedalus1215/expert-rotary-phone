/**
 * Reverse the linked list
 */

type LinkedListNode = {
  val: number;
  next: LinkedListNode | null;
};

const reverseLinkedList = (head: LinkedListNode): LinkedListNode => {
  if (head === null || head?.next === null) {
    return head;
  }

  const newHead = reverseLinkedList(head.next);
  
  head.next.next = head;
  head.next = null;
  return newHead;
};

const createList = (values: number[]): LinkedListNode | null => {
  if (values.length === 0) return null;
  const head: LinkedListNode = { val: values[0], next: null };
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = { val: values[i], next: null };
    current = current.next;
  }
  return head;
};

const toArray = (head: LinkedListNode | null): number[] => {
  const result: number[] = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};

describe("reverseLinkedList", () => {
  let target: typeof reverseLinkedList;

  beforeEach(() => {
    target = reverseLinkedList;
  });

  it("should handle a single node", () => {
    const head = createList([1]);
    const reversed = head ? target(head) : null;
    expect(toArray(reversed)).toEqual([1]);
  });

  it("should handle two nodes", () => {
    const head = createList([1, 2]);
    const reversed = head ? target(head) : null;
    expect(toArray(reversed)).toEqual([2, 1]);
  });

  it("should handle multiple nodes", () => {
    const head = createList([1, 2, 3, 4, 5]);
    const reversed = head ? target(head) : null;
    expect(toArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  it("should handle duplicate values", () => {
    const head = createList([1, 2, 2, 3]);
    const reversed = head ? target(head) : null;
    expect(toArray(reversed)).toEqual([3, 2, 2, 1]);
  });

  it("should handle negative and zero values", () => {
    const head = createList([0, -1, -2]);
    const reversed = head ? target(head) : null;
    expect(toArray(reversed)).toEqual([-2, -1, 0]);
  });
});
