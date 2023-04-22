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
    for (let key in this.map) {
            if (this.map[key][1] < Date.now()) {
                delete this.map[key];
            } else {
                count++
            }
    }
    return count;
};