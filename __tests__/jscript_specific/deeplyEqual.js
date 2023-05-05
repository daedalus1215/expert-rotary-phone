/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
const areDeeplyEqual = (o1, o2) => {
    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return false;
    }

    if (typeof o1 !== "object" || typeof o2 !== "object" || o1 === null || o2 === null) {
        return o1 === o2;
    }

    const o1Keys = Object.keys(o1);
    const o2Keys = Object.keys(o2);
    
    if (o1Keys.length !== o2Keys.length || !o1Keys.every(key => o2.hasOwnProperty(key))) {
        return false;
    }
    
    return o1Keys.every(key => areDeeplyEqual(o1[key], o2[key]));
};

describe('', () => {
    it('', () => {
        const o1 = { "x": 1, "y": 2 }, o2 = { "x": 1, "y": 2 }
        expect(areDeeplyEqual(o1, o2)).toEqual(true);
    });

    it('', () => {
        const o1 = { "y": 2, "x": 1 }, o2 = { "x": 1, "y": 2 }
        expect(areDeeplyEqual(o1, o2)).toEqual(true);
    });

    it('', () => {
        const o1 = { "x": null, "L": [1, 2, 3] }, o2 = { "x": null, "L": ["1", "2", "3"] }
        expect(areDeeplyEqual(o1, o2)).toEqual(false);
    });
    it('', () => {
        const o1 = { "0": 1 }
        expect(areDeeplyEqual(o1, null)).toEqual(false);
    });
});