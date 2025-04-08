/**
 * This function is intended to take an input (array) and return only the unique values.
 *
 * Given an input of [1,2,2,4,5,5,0,2,5,5,7,8,9], return only unique/distinct values
 */

export const arrs = {
    nums: [1, 2, 2, 4, 5, 5, 0, 2, 5, 5, 7, 8, 9],
    str: ['a', 'b', 'c', 'c', 'd', 'g', 'g', 'g', 'q', 't', 'q', 't', 'l'],
  };

  const getUnique = <TArray>(arr: TArray[]): TArray[] => {
    if (!arr) return [];
  
    const seen = new Map<TArray, boolean>()
    const newArray:TArray[] = [];

    for (const item of arr) {
      if(!seen.has(item)) {
        seen.set(item, true);
        newArray.push(item);
      }
    }
    return newArray;
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
  });  