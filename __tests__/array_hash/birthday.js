const birthday = (nums, day, month) => {
    let sum = [0],
        count = 0;

    for (let i = 1; i <= nums.length; i++) {
        sum[i] = sum[i - 1] + nums[i - 1];
    }

    for (let i = 0; i <= nums.length - month; i++) {
        if (sum[i + month] - sum[i] === day) {
            count++;
        }
    }

    return count;
}


describe('birthday', () => {
    it('', () => {
        expect(birthday([2, 2, 1, 3, 2], 4, 2)).toEqual(2);
    });
});