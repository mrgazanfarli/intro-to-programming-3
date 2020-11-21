// Finding the number of digits in a number

// 123 -> 3
// 1000 -> 4

console.clear();

function getDigitCountOf(number) {
    let count = 0;

    while(number !== 0) {
        number = (number - number % 10) / 10;
        count++;
    }
    
    return count;
}

const digitsCount = getDigitCountOf(3);

console.log(digitsCount);
