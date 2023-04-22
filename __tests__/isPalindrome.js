/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let  start = 0,
         end = x.length -1;

    const rep = x.toString();

    while (start <= end) {
        console.log('rep[start]', rep[start])
        console.log('rep[end]', rep[end])
        if (rep[start] !== rep[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

describe('', () => {
    it('', () => {
        expect(isPalindrome('-121')).toEqual('')
    });
});