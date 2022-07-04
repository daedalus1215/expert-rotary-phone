const selectionSort = array => {
    const len = array.length;

    for (i = 0; i < len; i++) { // time = o(n)
        const temp = array[i]; // space = o(1)
        let min = i; // space = o(1)
        for (j = i + 1; j < len; j++) { // time = o(n) [best case]; // time = o(n^2) [med-worst case]
            if (array[j] < array[min]) {
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}


describe('selectionSort', () => {
    it('should sort ', () => {
        let theArray = [6, 5, 3, 8, 7, 2, 1];
        const actual = selectionSort(theArray);
        expect(actual).toEqual([1, 2, 3, 5, 6, 7, 8]);
    });
});