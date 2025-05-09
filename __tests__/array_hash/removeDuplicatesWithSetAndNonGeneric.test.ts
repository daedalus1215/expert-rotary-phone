
export const arrs = {
  nums: [1, 2, 2, 4, 5, 5, 0, 2, 5, 5, 7, 8, 9],
  str: ['a', 'b', 'c', 'c', 'd', 'g', 'g', 'g', 'q', 't', 'q', 't', 'l'],
};

export const getUnique = (arr: (string | number)[]): (string | number)[] => {
  if (!arr) return [];
  return [...new Set(arr)];
};

describe('removeDuplicates', () => {
  test('should remove number duplicates', () => {
    expect(getUnique([1, 2, 2, 4, 5, 5, 0, 2, 5, 5, 7, 8, 9]))
      .toEqual([1, 2, 4, 5, 0, 7, 8, 9]);
  });

  test('should remove string duplicates', () => {
    expect(getUnique(['a', 'b', 'c', 'd', 'g', 'q', 't', 'l']))
      .toEqual(['a', 'b', 'c', 'd', 'g', 'q', 't', 'l']);
  });

  test('should remove string duplicates', () => {
    expect(getUnique([1, 2, 2, 4, 5, 5, 0, 2, 5, 5, 7, 8, 9, 'a', 'b', 'c', 'c', 'd', 'g', 'g', 'g', 'q', 't', 'q', 't', 'l']))
      .toEqual([1, 2, 4, 5, 0, 7, 8, 9, 'a', 'b', 'c', 'd', 'g', 'q', 't', 'l']);
  });
});

