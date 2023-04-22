/**
 * given a positive integer (millis), write an async func that sleeps for millis milliseconds. It can resolve any value.
 * @param {number} millis 
 * @returns 
 */
const sleep = (millis) => {
    return new Promise(resolve => setTimeout(resolve, millis))
}

