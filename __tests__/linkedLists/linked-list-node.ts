export type LinkedListNode = {
  val: number;
  next: LinkedListNode | null;
};

export const createList = (values: number[]): LinkedListNode | null => {
  if (values.length === 0) return null;
  const head: LinkedListNode = { val: values[0], next: null };
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = { val: values[i], next: null };
    current = current.next;
  }
  return head;
};

export const toArray = (head: LinkedListNode | null): number[] => {
  const result: number[] = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};
