function automorphic(number) {

    const lastDigit1 = number % 10;

    const lastDigit2 = (number * number) % 10;

    if (lastDigit1 === lastDigit2) {

        return true;
    }

    else {
        return false;
    }
}
const given_number = 324;

console.log(automorphic(given_number));