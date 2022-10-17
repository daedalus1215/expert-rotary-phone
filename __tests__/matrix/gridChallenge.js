
function gridChallenge(grid) {
    const sortedGrid = grid.map(a => a.split('').sort());
    for (let i = 0; i < sortedGrid[0].length; i++) {

        if (dfs(0, i, sortedGrid, sortedGrid[0][i]) == 'NO') {
            return 'NO'
        }
    }
    return 'YES';
}

const dfs = (y, x, sortedGrid, prevLetter) => {
    if (y >= sortedGrid.length || x >= sortedGrid[0].length) {
        return;
    }
    const currentLetter = sortedGrid[y][x];

    if (currentLetter < prevLetter) {
        return 'NO';
    }
    return dfs(y + 1, x, sortedGrid, currentLetter);
}


describe('gridChallenge', () => {
    it('', () => {
        expect(gridChallenge([
            'eabcd',
            'fghij',
            'olkmn',
            'trpqs',
            'xywuv']
            )).toEqual('YES');
    });
    it('', () => {
        expect(gridChallenge([
            'vbznfwg',
            'eacklwk',
            'bmarzvp',
            'rwgnjqd',
            'xqddtln',
            'wuxtduk',
            'rzmfcik']
            )).toEqual('YES');
    });
});