
/**
 * Every left bracket needs to have a closing matching bracket
 * in the appropriate order. 
 * @param {string} s a string of parenthesis that we want to determine if it is valid. ie. () = valid, ([{}]) = valid, ([) = not valid.
 */
const validParenthesis = (s) => {
    const list = s.split('');
    let lastSeen = [];
    for (let i = list.length - 1; i >= 0; i--) {
        if (list[i] === '(') {
            if (lastSeen.length === 0) {
                console.log('are we getting here')
                list.remove(i);
            } else {
                lastSeen.pop();
            }
        }

        if (list[i] === ')') {
            lastSeen.push(i);
        }
    };

    if (lastSeen.length === 0) {
        return list.join("");
    }

    console.log('lastSeenList', lastSeen)
    let removedItemYet = false;
    for (let i = 0; i < lastSeen.length; i++) {
        console.log('a - what are you list,', list)
        
        console.log('pop', lastSeen[i])
        list.splice(lastSeen[i], 1);
        console.log('b - what are you list,', list)
    }

    return list.join('');
}


describe('validParenthesis', () => {
    it('should return abcs if the value is a))bcs', () => {
        expect(validParenthesis('a))bcs')).toEqual('abcs');
    });
})