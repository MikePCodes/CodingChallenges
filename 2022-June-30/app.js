// Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

const charCodeSum = string =>
    string
        .toLowerCase()
        .split('')
        .reduce((total, char) => total + char.charCodeAt(0), 0)

const isAnagram = (test, original) =>
    charCodeSum(test) === charCodeSum(original)
