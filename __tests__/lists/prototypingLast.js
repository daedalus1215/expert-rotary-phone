Array.prototype.last = function(){
    const length = this.length;
    if (length === 0) return -1;
    return this[this.length-1];
};


describe('array prototype', () => {
    it('', () => {
        expect([3,2,1,4,5].last()).toEqual(5);
    });
});