
const isAlphanumeric = (char: string) => /^[a-zA-Z0-9]$/.test(char);

const palindrome = (input: string) => {
    if (input.length < 2) {
        return true;
    }

    let left = 0;
    let right = input.length - 1;

    while (left < right) {
        if (!isAlphanumeric(input[left])) {
            left++;
            continue;
        }
        if (!isAlphanumeric(input[right])) {
            right--;
            continue;
        }
        if (input[left] !== input[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

describe('palindrome', () => {
    it('should...', () => {
        // Arrange
        const string = "";
        const expected = true 
        
        // Act
        const actual = palindrome(string);

        // Assert
        expect(actual).toEqual(expected);
    });

    it('should...', () => {
        // Arrange
        const string = "a";
        const expected = true;

        // Act
        const actual = palindrome(string);

        // Assert
        expect(actual).toEqual(expected);
    });

    it('should...', () => {
        // Arrange
        const string = "aa";
        const expected = true 

        // Act
        const actual = palindrome(string);

        // Assert
        expect(actual).toEqual(expected);
    });

    it('should...', () => {
        // Arrange
        const string = "ab";
        const expected = false 
 
        // Act
        const actual = palindrome(string);

        // Assert
        expect(actual).toEqual(expected);
    });

    it('should...', () => {
        // Arrange
        const string = "!, (?)";
        const expected = true 
 
        // Act
        const actual = palindrome(string);

        // Assert
        expect(actual).toEqual(expected);
    });
    it('should...', () => {
        // Arrange
        const string = "12.02.2021";
        const expected = true
 
        // Act
        const actual = palindrome(string);

        // Assert
        expect(actual).toEqual(expected);
    });
    it('should...', () => {
        // Arrange
        const string = "21.02.2021";
        const expected = false
 
        // Act
        const actual = palindrome(string);

        // Assert
        expect(actual).toEqual(expected);
    });

    it('should...', () => {
        // Arrange
        const string = "hello, world!";
        const expected = false
 
        // Act
        const actual = palindrome(string);

        // Assert
        expect(actual).toEqual(expected);
    });
});