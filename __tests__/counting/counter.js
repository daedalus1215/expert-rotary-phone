const createCounter = (n) => {
    let index = -1;
    return () => {
        return ++index + n
    }
}


describe('counter', () => {
    it('should return a counter function, this counter function initially returns n and then returns 1 more than the prev vlaue every subsequent time it is called (n, n+1, n+2)', () => {

        const target = createCounter(10)

        expect(target()).toEqual(10);
        expect(target()).toEqual(11);
        expect(target()).toEqual(12);
    });
});