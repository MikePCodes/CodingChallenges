// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let wordsArray = s.split(' ')
    let wordsLength = wordsArray.map(word => word.length)
    let minWordLength = Math.min(...wordsLength)
    return minWordLength
}