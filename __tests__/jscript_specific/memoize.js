function memoize(fn) {
    const maps = {};
    return function (...args) {
        const wrapped = args.join('~')
        if (maps[wrapped]!== undefined) return maps[wrapped];
        maps[wrapped] = fn(...args)
        return maps[wrapped]
    }
}

describe('', () => {
    it('', () => {
        let callCount = 0;
        const fn = memoize((a, b) => {
            callCount += 1;
            return a + b;
        })
        fn(0, 0)
    
        // expect(fn(0, 0)).toEqual("undefined");
        expect(callCount).toEqual(1);
        // expect(fn(0, 0)).toEqual("undefined");
        fn(0, 0)
        expect(callCount).toEqual(1);
        console.log(callCount)
        
    });
});