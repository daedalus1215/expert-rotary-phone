
/**
 * Remove any unmatching parenthesis. This solution is time = o(4n) & space = o(2n)
 * @param {string} s 
 * @returns 
 */
const removeMinimumParenthesis = (s) => {
    const list = s.split(''); // space = o(n) & time = o(n)
    let lastSeen = [];  // space = o(n)
    for (let i = list.length - 1; i >= 0; i--) { // time = o(n)
        if (list[i] === '(') { // comment (A): we can go forward, not backwards, but if we do, we should be looking for ')', not '('
            if (lastSeen.length === 0) {
                list.splice(i, 1);
            } else {
                lastSeen.pop();
            }
        }

        if (list[i] === ')') { // vice versa, if we do comment (A)
            lastSeen.push(i);
        }
    };

    if (lastSeen.length === 0) {
        return list.join("");
    }

    for (let i = 0; i < lastSeen.length; i++) { // time = o(n)
        list.splice(lastSeen[i], 1);
    }

    return list.join(''); // time = o(n)
}


describe('removeMinimumParenthesis', () => {
    it('should return abcs if the value is a))bcs', () => {
        expect(removeMinimumParenthesis('a))bcs')).toEqual('abcs');
    });

    it('should return abcs if the value is a))bcs', () => {
        expect(removeMinimumParenthesis('a)bcs')).toEqual('abcs');
    });

    it('should return (a)bcs if the value is (a)bcs', () => {
        expect(removeMinimumParenthesis('(a)bcs')).toEqual('(a)bcs');
    });

    it('should return (a)b)cs if the value is (a)bcs', () => {
        expect(removeMinimumParenthesis('(a)b)cs')).toEqual('(a)bcs');
    });

    it('should return (ab(c)s if the value is (a)bcs', () => {
        expect(removeMinimumParenthesis('(a)b)cs')).toEqual('(a)bcs');
    });
});