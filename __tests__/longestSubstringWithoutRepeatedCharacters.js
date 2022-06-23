

/**
 * 
 * @param {string} s the string we are going to find the longest consecutive unqiue string
 */
const longestSubstringWithoutRepeatedCharactersBruteForce = (s) => {
    if (s.length <= 1) {
        return s.length;
    }

    let index = 0, count = 0, start = 0, hash = {};

    while (start < s.length) {
        if (hash[s[index]] !== 1) {
            hash[s[index]] = 1;

            count = Math.max(Object.keys(hash).length - 1, count);

            index++;
        } else {
            hash = {};
            start++;
            index = start;
        }
    }

    return count;
};

describe('longestSubstringWithoutRepeatedCharactersBruteForce', () => {
    it('should return 4 when given a string of abcbdca', () => {
        const actual = longestSubstringWithoutRepeatedCharactersBruteForce('abcbdca');
        expect(actual).toEqual(4);
    });
    it('should return 0 when given a string of ""', () => {
        const actual = longestSubstringWithoutRepeatedCharactersBruteForce('');
        expect(actual).toEqual(0);
    });

    it('should return 1 when given a string of "a"', () => {
        const actual = longestSubstringWithoutRepeatedCharactersBruteForce('a');
        expect(actual).toEqual(1);
    });
});