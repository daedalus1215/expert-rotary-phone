
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
    let p1 = first.length - 1,
        p2 = second.length - 1;

    while (p1 >= 0 || p2 >= 0) {

        if (first[p1] === '#' || second[p2] === '#') {
            if (first[p1] === '#') {
                let backcount = 2;

                while (backcount > 0) {
                    p1--;
                    backcount--;
                    if (first[p1] === '#') {
                        backcount = backcount + 2;
                    }
                }
            }

            if (second[p2] === '#') {
                let backcount = 2;

                while (backcount > 0) {
                    p2--;
                    backcount--;
                    if (second[p2] === '#') {
                        backcount = backcount + 2;
                    }
                }
            }
        } else {
            if (first.charAt(p1) !== second.charAt(p2)) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }

    return true;
};

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