class TimeLimitedCache {
    constructor() {
        this.map = {};
    }
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const doesExist = this.map[key] !== undefined;
    this.map[key] = [value,Date.now() + duration]
    return doesExist;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    // if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
    const existing = this.map[key];
    if (!existing) {
        return -1
    }
    if(existing[1] > Date.now()) {
        return existing[0]
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let count = 0
    for (let key in this.map) { // this is better performance than say Object.keys(). Reasons is because Object.keys() creates a whole new array: https://stackoverflow.com/questions/126100/how-to-efficiently-count-the-number-of-keys-properties-of-an-object-in-javascrip
            if (this.map[key][1] < Date.now()) { // not sure if we needed to do array, refactored to array over object, but still did not give us the performance we needed.
                delete this.map[key];
            } else {
                count++
            }
    }
    return count;
};