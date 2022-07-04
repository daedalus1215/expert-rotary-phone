let counter = 0;
const inception = () => {
    if ( counter > 3) {
        return 'done!'; // base case
    }

    counter++;
    console.log('counter', counter)
    return inception(); // recursive case
}



describe.skip('inception', () => {
    it('', () => {
        return inception();
    });
});