const str1 = "radar";
function isPalindrome(str) {
    lowerCase = str.toLowerCase();
    let reversedString = "";
    for (let i = lowerCase.length - 1; i >= 0; i--) {
        reversedString = reversedString + lowerCase[i];

    }
    if (reversedString === str) {
        return true;
    }
    else {
        return false;
    }
}

const firstWord = isPalindrome(str1);
console.log(firstWord);
