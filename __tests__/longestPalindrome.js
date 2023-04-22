/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s === null || s.length < 1) {
        return '';
    }
    
    let start = 0,
        end = 0;
    
    for(i = 0; i < s.length; i++) {
        const len = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const max = Math.max(len, len2);
        if (max > end - start) {
            console.log('max', max);
            start = i - Math.floor((max - 1) / 2);
            console.log('start', start);
            end = Math.floor(i + max / 2);
            console.log('end', end);
        }
    }

    return s.substring(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
    let L = left, R = right;
    while (L >= 0 && R < s.length && s[L] === s[R]) {
        L--;
        R++;
    }
    
    return R - L - 1;
}



describe('longestPalindrome', () => {
    // it('longestPalindrome', () => {
    //     expect(longestPalindrome('babad')).toEqual('aba');
    // });
    it('longestPalindrome', () => {
        expect(longestPalindrome('cbbd')).toEqual('bb');
    });
});