var compose = function(functions) {
	return function(x) {

        // don't need this if I end up using reduceRight
        const funcs = [];
        while (functions.length > 0) {
            funcs.push(functions.pop());
        }

        return funcs.reduce((acc, currentValue) => currentValue(acc), x);
    }
};

describe('', () => {
    it('', () => {
        const actual = compose([x => x + 1, x => 2 * x]);
        expect(actual(4)).toEqual(9);
    });
});