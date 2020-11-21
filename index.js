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

// DO --- WHILE

let i = 10;

do {
    console.log(i);
    i++;
} while (i < 10)

// Finding sum between two given boundries

function getSumOf(lowerBound, higherBound) {
    if (lowerBound >= higherBound) {
        return 0;
    }

    let finalResult = 0;

    for (let i = lowerBound; i <= higherBound; i++) {
        finalResult += i;
    }

    return finalResult;
}

const sum = getSumOf(1, 4);

console.log(sum);
