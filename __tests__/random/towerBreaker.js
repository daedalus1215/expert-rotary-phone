const towerBreaker = (height, amountOfTowers) => {
    if (height === 1 || amountOfTowers % 2 === 0) {
        return 2;
    } 

    return 1;
};

describe('towerBreaker', () => {
    it('should return 2', () => {
        expect(towerBreaker(2, 2)).toEqual(2);
    });
    it('should return 2', () => {
        expect(towerBreaker(1, 4)).toEqual(2);
    });
    it('should return 1', () => {
        expect(towerBreaker(3, 1)).toEqual(1);
    });
})