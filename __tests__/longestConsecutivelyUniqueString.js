

/**
 * 
 * @param {string} s the string we are going to find the longest consecutive unqiue string
 */
const longestConsecutivelyUniqueString = (s) => {

    let index = 0, count = 0, start = 0, hash = {};

    while (start < s.length) {
        if (hash[s[index]] !== 1) {
            hash[s[index]] = 1;
            if (Object.keys(hash).length > count) {
                count = Object.keys(hash).length -1;
            }
            index++;
        } else {
            hash = {};
            start++;
            index = start;
        }
    }

    return count;
};




describe('longestConsecutivelyUniqueString', () => {
    it('should return 4 when given a string of abcbdca', () => {
        const actual = longestConsecutivelyUniqueString('abcbdca');
        expect(actual).toEqual(4);
    });
});