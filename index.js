console.clear();

// Reversing a string
const str1 = 'hello world';

function reverseString(str) {
    let result = '';
    
    for (let i = str.length - 1; i >= 0; i-- ) {
        result = result + str[i];
    }
    
    return result;
}

const reversedStr1 = reverseString(str1);

console.log(reversedStr1);
