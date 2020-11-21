console.clear();

// Getting words with the given length from an array of words

const words = ['index', 'output', 'file', 'folder', 'terminal', 'open', 'editor', 'code', 'while'];

function getWordsWithLengthOf(arrayOfWords, requiredLength) {
    const results = [];

    for (let i = 0; i < arrayOfWords.length; i++) {
        const currentWord = arrayOfWords[i];

        if (currentWord.length === requiredLength) {
            results.push(currentWord);
        }
    }

    return results;
}

const wordsWithLengthOf4 = getWordsWithLengthOf(words, 4);

console.log(wordsWithLengthOf4);
