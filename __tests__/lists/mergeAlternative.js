const mergeAlternately = (word1, word2) => {
    const countOne = word1.length;
    const countTwo = word2.length;
    const max = Math.max(countOne, countTwo);

    let result = '';
    for (let i = 0; i < max; i++) {
        if (i < countOne) {
            result += word1[i];
        }
        if (i < countTwo) {
            result += word2[i]
        }
    }

    return result
};


describe('mergeAlternative', () => {
    it('', () => {
        expect(mergeAlternately('abc', 'pqr')).toEqual('apbqcr');
    });
});