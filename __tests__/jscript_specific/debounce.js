const debounce = (fn, time) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, time)

    }
}

describe('', () => {
    it('', () => {
        const log = (args) => {
            console.log(args)
        }

        const logging = debounce(log, 100);
        logging();
    });
});