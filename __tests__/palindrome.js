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
    const startingPoint = getCenterPoint(s);
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


const isPalindrome = (s) => {
    let isOdd = false;

    if (s.length % 2 == 1) {
        isOdd = true;
    }

    if (isOdd) {
        return isValidPalindromeInnerToOuter(s)
    } else {
        return isValidPalindromeOuterToInner(s);
    }
}

const normalizeString = s => s.replace('/[^A-Za-z0-9]/g', '').toLowerCase();
const isOdd = s => s.length % 2 === 1;
const getCenterPoint = (s) => {
    const center = Math.max(s.length / 2) - .5;
    return center;
}

/**
 * Used for odd character strings
 * @param {string} s string that might have discrepencies.
 * @returns Empty array if no discrepencies, otherwise an array of initial discrepencies.
 */
const findOddDiscrepencies = s => {
    const startingPoint = getCenterPoint(s);

    let left = startingPoint; right = startingPoint;
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) {
            return [left, s.length - right];
        }

        left--;
        right++;
    }
    return [];
};

/**
 * Used for even character strings
 * @param {string} s string that might have discrepencies.
 * @returns Empty array if no discrepencies, otherwise an array of initial discrepencies.
 */
const findEvenDiscrepencies = (s) => {
    s = s.replace('/[^A-Za-z0-9]/g', '').toLowerCase();
    let left = 0; right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return [left, right];
        }

        left++;
        right--;
    }

    return [];
}

const isAlmostPalindrome = (s) => {
    s = normalizeString(s);

    if (isOdd(s)) {
        const disc = findOddDiscrepencies(s);
        if (disc.length === 2) {
            const firstNewString = getNewString(s, disc[0]);
            const secondNewString = getNewString(s, disc[1]);
            const startingPoint = getCenterPoint(firstNewString);

            let left = startingPoint; right = startingPoint;
            let leftFailure = false, rightFailure = false;
            while (left >= 0 && right < s.length) {
                if (leftFailure === false && firstNewString[left] !== firstNewString[right]) {
                    leftFailure = true;
                }

                if (rightFailure === false && secondNewString[left] !== secondNewString[right]) {
                    rightFailure = true;
                }

                if (leftFailure && rightFailure) {
                    return false;
                }

                left--;
                right++;
            }

            return true;
        } else {
            return true; // there was no discrepencies, so it is a palindrome!
        }
    } else {
        const disc = findEvenDiscrepencies(s);
        if (disc.length === 2) {
            const firstNewString = getNewString(s, disc[0]);
            const secondNewString = getNewString(s, disc[1]);
            const startingPoint = getCenterPoint(firstNewString);

            let left = startingPoint; right = startingPoint;
            let leftFailure = false, rightFailure = false;
            while (left >= 0 && right < s.length) {
                if (leftFailure === false && firstNewString[left] !== firstNewString[right]) {
                    leftFailure = true;
                }

                if (rightFailure === false && secondNewString[left] !== secondNewString[right]) {
                    rightFailure = true;
                }


                if (leftFailure && rightFailure) {
                    return false;
                }

                left--;
                right++;
            }

            return true;
        } else {
            return true; // there was no discrepencies, so it is a palindrome!
        }
    }
}


const getNewString = (s, index) => {
    const yes = s.slice(0, index) + s.slice(index + 1, s.length);
    return yes;
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

    describe('isAlmostPalindrome', () => {
        it('should return true', () => {
            expect(isAlmostPalindrome('abcba')).toEqual(true);
        });
        it('should return true', () => {
            expect(isAlmostPalindrome('abad')).toEqual(true);
        });
        it('should return true', () => {
            expect(isAlmostPalindrome('daba')).toEqual(true);
        });
        it('should return true', () => {
            expect(isAlmostPalindrome('aba')).toEqual(true);
        });
        it('should return true', () => {
            expect(isAlmostPalindrome('raceacar')).toEqual(true);
        });
        it('should return true', () => {
            expect(isAlmostPalindrome('abccdba')).toEqual(true);
        });
        it('should return true', () => {
            expect(isAlmostPalindrome('abcdefdba')).toEqual(true);
        });
        it('should return true', () => {
            expect(isAlmostPalindrome('abcba')).toEqual(true);
        });
    });
});