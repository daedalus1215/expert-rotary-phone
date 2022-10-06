function sockMerchant(n, ar) {
    let pairsOfSocks = 0;
    const recentlySeenSocks = {};

    for (let i = 0; i < n; i++) {
        if (recentlySeenSocks[ar[i]] && recentlySeenSocks[ar[i]] === 1) {
            recentlySeenSocks[ar[i]] = 0;
            pairsOfSocks++;
        } else {
            recentlySeenSocks[ar[i]] = 1;
        }
    }

    return pairsOfSocks;
}


describe('', () => {
    it('', () => {
        expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toEqual(3);
    });
});