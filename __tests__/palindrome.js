/**
 * This is for even problems
 * @param {string} s 
 */
const isValidPalindromeOuterToInner = (s) => {
    s = s.replace('/[^A-Za-z0-9]/g', '').toLowerCase();
    let left = 0; right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

/**
 * This is for odd problems
 * @param {string} s 
 * @returns 
 */
const isValidPalindromeInnerToOuter = (s) => {
    // Could combine the two functions. Just check if it's an odd or even string then conditionally run through these.
    s = s.replace('/[^A-Za-z0-9]/g', '').toLowerCase();
    const startingPoint = Math.max(s.length / 2) + .5;
    let left = startingPoint; right = startingPoint;
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) {
            return false;
        }

        left--;
        right++;
    }

    return true;
}


describe('palindrome', () => {
    describe('isValidPalindromeOuterToInner', () => {
        it('should return true', () => {
            expect(isValidPalindromeOuterToInner('abccba')).toEqual(true);
        });
    });
    describe('isValidPalindromeInnerToOuter', () => {
        it('should return true', () => {
            expect(isValidPalindromeOuterToInner('abcba')).toEqual(true);
        });
    });
});