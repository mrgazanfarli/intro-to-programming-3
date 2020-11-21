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

// Get the number of prime numbers

// 1---20 -> 2, 3, 5, 7, 11, 13, 17, 19
// 29
// 2 - 28
// 2 - root of 29

function isPrime(number) {
    const root = Math.sqrt(number);

    for (let i = 2; i < root; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function getPrimeNumbersWithIn(lowerBound, higherBound = 100) {
    let result = [];

    if (lowerBound <= 1) {
        lowerBound = 2;
    }

    for (let i = lowerBound; i <= higherBound; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    }

    return result;
}

console.log(getPrimeNumbersWithIn(1, 20));
