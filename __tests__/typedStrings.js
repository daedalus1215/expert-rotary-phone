

/**
 * 
 * @param {String} a 
 * @param {String} t 
 */
const typedStrings = (first, second) => {
    let left = [],
        right = [];

    for (let i = 0; i < first.length; i++) {
        const character = first.charAt(i)
        if (character === "#") {
            left.pop();
        } else {
            left.push(character);
        }
    }

    for (let i = 0; i < second.length; i++) {
        const character = second.charAt(i)
        if (character === "#") {
            right.pop();
        } else {
            right.push(character);
        }
    }

    if (left.length === right.length) {
        for (let i = 0; i < left.length; i++) {
            if (left[i] !== right[i]) {
                return false;
            }
        }
    } else {
        return false;
    }

    return true;
};


describe('typedStrings', () => {
    it('when given ab#z and az#z return true', () => {
        actual = typedStrings("ab#z", "az#z");
        expect(actual).toEqual(true);
    });

    it('when given abc#d and acc#c return true', () => {
        actual = typedStrings("abc#d", "acc#c");
        expect(actual).toEqual(false);
    });

    it('when given ab#z and az#z return true', () => {
        actual = typedStrings("x#y#2#", "a#");
        expect(actual).toEqual(true);
    });

    it('when given ab#z and az#z return true', () => {
        actual = typedStrings("a###b", "b");
        expect(actual).toEqual(true);
    });
});