
/**
 * Every left bracket needs to have a closing matching bracket
 * in the appropriate order. 
 * @param {string} s a string of parenthesis that we want to determine if it is valid. ie. () = valid, ([{}]) = valid, ([) = not valid.
 */
const validParenthesis = (s) => {
    const list = s.split('');
    let lastSeen = [];
    for (let i = list.length - 1; i >= 0; i--) {
        if (list[i] === '(') {
            if (lastSeen.length === 0) {
                list.splice(i, 1);
            } else {
                lastSeen.pop();
            }
        }

        if (list[i] === ')') {
            lastSeen.push(i);
        }
    };

    if (lastSeen.length === 0) {
        return list.join("");
    }

    for (let i = 0; i < lastSeen.length; i++) {
        list.splice(lastSeen[i], 1);
    }

    return list.join('');
}


describe('validParenthesis', () => {
    it('should return abcs if the value is a))bcs', () => {
        expect(validParenthesis('a))bcs')).toEqual('abcs');
    });

    it('should return abcs if the value is a))bcs', () => {
        expect(validParenthesis('a)bcs')).toEqual('abcs');
    });

    it('should return (a)bcs if the value is (a)bcs', () => {
        expect(validParenthesis('(a)bcs')).toEqual('(a)bcs');
    });

    it('should return (a)b)cs if the value is (a)bcs', () => {
        expect(validParenthesis('(a)b)cs')).toEqual('(a)bcs');
    });

    it('should return (ab(c)s if the value is (a)bcs', () => {
        expect(validParenthesis('(a)b)cs')).toEqual('(a)bcs');
    });
})