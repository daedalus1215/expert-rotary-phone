/**
 * Return the head of a singly linked list after removing the Kth node from the end of it.
 */

import { LinkedListNode } from "./linked-list-node";
  const removeKthTrailNode = (head: LinkedListNode, k: number): LinkedListNode => {
    let dummy:LinkedListNode|null = {val:0, next:head};
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i < k; i++) {
      fast = fast.next as LinkedListNode;
      if(!fast) {
        return head;
      }
    }

    while (fast.next !== null) {
        // typescript believes dummy.next could be null, but it can't be, based on the k-loop.
        slow = slow.next as LinkedListNode;
        fast = fast.next;
    }
    
    // typescript believes dummy.next could be null, but it can't be, based on the k-loop.
    if (slow.next) {
      slow.next = slow.next.next;
    }

    // typescript believes dummy.next could be null, but it can't be, based on the k-loop.
    return dummy.next as LinkedListNode;
  };
  
  
const createList = (values: number[]): LinkedListNode => {
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

describe("removeKthTrailNode", () => {
  let target: typeof removeKthTrailNode;

  beforeEach(() => {
    target = removeKthTrailNode;
  });

  it("should remove the last node from the list", () => {
    const head = createList([1, 2, 3, 4, 5]);
    const k = 1;
    const result = target(head!, k);
    expect(toArray(result)).toEqual([1, 2, 3, 4]);
  });

  it("should remove the first node from the list", () => {
    const head = createList([1, 2, 3, 4, 5]);
    const k = 5;
    const result = target(head!, k);
    expect(toArray(result)).toEqual([2, 3, 4, 5]);
  });

  it("should remove a middle node from the list", () => {
    const head = createList([1, 2, 3, 4, 5]);
    const k = 3;
    const result = target(head!, k);
    expect(toArray(result)).toEqual([1, 2, 4, 5]);
  });

  it("should handle a single-node list", () => {
    const head = createList([1]);
    const k = 1;
    const result = target(head!, k);
    expect(toArray(result)).toEqual([]);
  });

  it("should handle an empty list", () => {
    const head = createList([]);
    const k = 1;
    const result = target(head!, k);
    expect(toArray(result)).toEqual([]);
  });

  it("should handle invalid k values (greater than list length)", () => {
    const head = createList([1, 2, 3]);
    const k = 5;
    const result = target(head!, k);
    expect(toArray(result)).toEqual([1, 2, 3]); // No changes
  });

  it("should handle invalid k values (less than 1)", () => {
    const head = createList([1, 2, 3]);
    const k = 0;
    const result = target(head!, k);
    expect(toArray(result)).toEqual([1, 2, 3]); // No changes
  });
});