
/**
 * 
 * @param {String} a 
 * @param {String} t 
 */
const typedStrings = (first, second) => {
    const left = buildArray(first);
    const right = buildArray(second);

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

const buildArray = (typedStrings) => {
    let theArray = [];

    for (let i = 0; i < typedStrings.length; i++) {
        const character = typedStrings.charAt(i)
        if (character === "#") {
            theArray.pop();
        } else {
            theArray.push(character);
        }
    }

    return theArray;
}

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