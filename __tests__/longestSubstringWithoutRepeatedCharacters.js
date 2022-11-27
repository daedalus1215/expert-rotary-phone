

/**
 * 
 * @param {string} s the string we are going to find the longest consecutive unqiue string
 */
const longestSubstringWithoutRepeatedCharactersBruteForce = (wholeString) => {
    if (wholeString.length === 0) return 0;

    let right = 0;
    let tots = 1;
    for (let left = 0; left < wholeString.length; left++) {
        const seen = { [wholeString[left]]: true };
        right = left + 1;
        let count = 1;

        while (right < wholeString.length) {
            if (seen[wholeString[right]]) {
                tots = count > tots ? count : tots;
                break;
            }
            seen[wholeString[right]] = true;
            count++;
            right++;
        }
        tots = count > tots ? count : tots;
    }

    return tots; 
};

const longestSubstringWithoutRepeatedCharactersPerformance = (s) => {
    if (s.length <= 1) {
        return s.length;
    }

    let left = 0;
    let seenChar = {};
    let longest = 0;
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const lastSeen =  seenChar[currentChar];
        if (lastSeen >= left) {
            left = lastSeen + 1;
        }
        seenChar[currentChar] = right;
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
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
    
    it('should return 4 when given a string of abcbdca', () => {
        const actual = longestSubstringWithoutRepeatedCharactersPerformance('abcbdca');
        expect(actual).toEqual(4);
    });
    it('should return 0 when given a string of ""', () => {
        const actual = longestSubstringWithoutRepeatedCharactersPerformance('');
        expect(actual).toEqual(0);
    });

    it('should return 1 when given a string of "a"', () => {
        const actual = longestSubstringWithoutRepeatedCharactersPerformance('a');
        expect(actual).toEqual(1);
    });
});