console.clear();

function reverseArray(arr) {
    const result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const reversedNumbers = reverseArray(numbers);

console.log(reversedNumbers);

// code added by Aisha