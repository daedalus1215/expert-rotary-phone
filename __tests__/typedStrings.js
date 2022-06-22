
/**
 * 
 * @param {String} a 
 * @param {String} t 
 */
const typedStringsBruteForce = (first, second) => {
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


const typedStringsPerformance = (first, second) => {
    first = mutateStrings(first);
    second = mutateStrings(second);
    console.log('first', first);
    console.log('second', second);
    if (first.length === second.length) {
        for (let i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) {
                return false;
            }
        }
    } else {
        return false;
    }

    return true;
};

const mutateStrings = (typedStrings) => {
    let p1 = 0, p2 = typedStrings.length - 1;

    while (p1 < p2) {
        const fir = typedStrings.charAt(p1);
        const sec = typedStrings.charAt(p2);
        const shouldMoveFir = Math.random() < 0.5;

        if (fir === '#') {
            typedStrings = typedStrings.slice(0, p1 - 1) + typedStrings.slice(p1 + 1);
        } else {
            if (shouldMoveFir) p1++;
        }
        if (sec === '#') {
            typedStrings = typedStrings.slice(0, p2 - 1) + typedStrings.slice(p2 +1)
        } else {
            if (!shouldMoveFir) p2--;
        }
    }

    return typedStrings;
}

describe('typedStrings', () => {
    describe('typedStringsBruteForce', () => {
        it('when given ab#z and az#z return true', () => {
            actual = typedStringsBruteForce("ab#z", "az#z");
            expect(actual).toEqual(true);
        });

        it('when given abc#d and acc#c return true', () => {
            actual = typedStringsBruteForce("abc#d", "acc#c");
            expect(actual).toEqual(false);
        });

        it('when given ab#z and az#z return true', () => {
            actual = typedStringsBruteForce("x#y#2#", "a#");
            expect(actual).toEqual(true);
        });

        it('when given ab#z and az#z return true', () => {
            actual = typedStringsBruteForce("a###b", "b");
            expect(actual).toEqual(true);
        });
    })
    describe('typedStringsPerformance', () => {
        it('when given ab#z and az#z return true', () => {
            actual = typedStringsPerformance("ab#z", "az#z");
            expect(actual).toEqual(true);
        });

        it('when given abc#d and acc#c return true', () => {
            actual = typedStringsPerformance("abc#d", "acc#c");
            expect(actual).toEqual(false);
        });

        it('when given ab#z and az#z return true', () => {
            actual = typedStringsPerformance("x#y#2#", "a#");
            expect(actual).toEqual(true);
        });

        it('when given ab#z and az#z return true', () => {
            actual = typedStringsPerformance("a###b", "b");
            expect(actual).toEqual(true);
        });
    });
});