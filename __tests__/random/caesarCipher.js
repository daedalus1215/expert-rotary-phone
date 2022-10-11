const caesarCipher = (unencryptedString, rotation) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newString = '';

    for (let i = 0; i < unencryptedString.length; i++) {
        if (alphabet.indexOf(unencryptedString[i]) === -1 && caps.indexOf(unencryptedString[i]) === -1) {
            newString += unencryptedString[i];
        } else if (alphabet.indexOf(unencryptedString[i]) === -1) {
            const newL = caps.indexOf(unencryptedString[i]) + rotation;
            const finalLoc = newL % 26;
            newString += caps[finalLoc];
        } else {
            const newL = (alphabet.indexOf(unencryptedString[i]) + rotation);
            const finalLoc = (alphabet.indexOf(unencryptedString[i]) + rotation) % 26;
            newString += alphabet[finalLoc];
        }

    }

    return newString;
};

describe('', () => {
    it('', () => {
        expect(caesarCipher('middle-Outz', 2)).toEqual('okffng-Qwvb');
    });

    it('', () => {
        expect(caesarCipher('wow, hanging footnail.', 2)).toEqual('yqy, jcpikpi hqqvpckn.');
    });
})