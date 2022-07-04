const insertionSort = array => {
    let length = array.length;

    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    array.splice(j, 0, array.splice(i, 1)[0])
                }
            }
        }
    }
}


describe('insertionSort', () => {
    it('should sort the array', () => {
        let theArray = [6, 5, 3, 8, 7, 2, 1];
        insertionSort(theArray)
        expect(theArray).toEqual([1, 2, 3, 5, 6, 7, 8]);
    });
});