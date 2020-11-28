function removeLetter(string, character) {
    const res = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== character) {
            res.push(string[i]);
        }

    }

    return res.join("");
    // res = res.join("");
}
console.log(removeLetter("Tommy", "m"));
