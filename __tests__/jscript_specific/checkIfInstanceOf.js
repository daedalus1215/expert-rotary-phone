const checkIfInstanceOf = (obj, clazz) => {
    while (obj != null) { // if we do !== then we won't cover undefined.
        if (obj.constructor === clazz) {
            return true;
        }

        obj = Object.getPrototypeOf(obj);
   }

   return false;
};


describe('', () => {
    it('checking for date', () => {
        expect(checkIfInstanceOf(new Date(), Date)).toEqual(true)
    });
    it('extend class', () => {
        class Animal { };
        class Dog extends Animal { };

        expect(checkIfInstanceOf(new Dog(), Animal)).toEqual(true)
    });
    it('Cover if it is a class passed into both args', () => {
        expect(checkIfInstanceOf(Date, Date)).toEqual(false)
    });
    it('cover numbers', () => {
        expect(checkIfInstanceOf(5, Number)).toEqual(true)
    });
    it('cover strings', () => {
        expect(checkIfInstanceOf('hi', String)).toEqual(true)
    });
});