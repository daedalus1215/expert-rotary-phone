const xor = (first, second) => {
    let result = '';
    for (let i = 0; i < first.length; i++) {
        if (first[i] === second[i]) {
            result += '0'
        } else {
            result += '1';
        }
    }

    return result;
};

describe('xor', () => {
    it('should...', () => {
        expect(xor('10101', '00101')).toEqual('10000');
    });
});