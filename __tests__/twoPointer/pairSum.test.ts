// Given an array of integers, sorted in ascending order and a target value,
// return the indexes of any pair of numbers in the array that sum to the target.
// The order of the indexes in the result doesn't matter. If no pair is found, return an empty array.

// Example:
// Input: [-5, -2, 3, 4, 6], target = 7
// Output: [2, 3]
// Explanation: nums[2] + nums[3] = 3 + 4 = 7

// Example:
// Input: [1, 1, 1], target = 2
// Output: [0, 1]
// Explanation: other valid outputs could be [1, 0], [0, 2], [2, 0], [1, 2], or [2, 1]

const pairSumBruteForce = (input: number[], target: number) => {
  if (!input) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (input[i] + input[j] === target) {
        return [i, j];
      }
    }
  }
};

const pairSum = (inputs: number[], target: number) => {
  if (!inputs) {
    return [];
  }
  let left = 0;
  let right = inputs.length - 1;

  while (true) {
    if (left >= right) {
      return [];
    }

    let sum = inputs[left] + inputs[right];

    if (sum === target) {
      return [left, right];
    }

    if (sum < target) {
      left++;
      continue;
    }

    if (sum > target) {
      right--;
      continue;
    }
  }
};

describe("pairSum", () => {
  describe("#pairSumBruteForce", () => {
    describe("given a valid array with a valid target", () => {
      it("should return the appropriate indexes", () => {
        // Arrange
        const input = [-5, -2, 3, 4, 6];
        const target = 7;

        // Act
        const actual = pairSumBruteForce(input, target);

        // Assert
        expect(actual).toEqual([2, 3]);
      });
    });
  });

  describe("#pairSum", () => {
    describe("given a valid array with a valid target", () => {
      it("should return the appropriate indexes", () => {
        // Arrange
        const input = [-5, -2, 3, 4, 6];
        const target = 7;
        const expected = [2, 3];

        // Act
        const actual = pairSum(input, target);

        // Assert
        expect(actual).toEqual(expected);
      });
    });
  });
});
