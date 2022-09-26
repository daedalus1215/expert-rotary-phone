function matchingStrings(strings, queries) {

    const hash = {};
    for (let i = 0; i < strings.length; i++) {
        const value = strings[i];
        if (!hash[value]) {
            hash[strings[i]] = 1;
        } else {
            hash[strings[i]] += 1;
        }
    }

    const result = [];
    for (let i = 0; i < queries.length; i++) {
        if (hash[queries[i]]) {
            result[i] = hash[queries[i]];
        } else {
            result[i] = 0
        }
    }

    return result;
}


describe('', () => {
    it('', () => {
        expect(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))
            .toEqual([2, 1, 0])
    });
});