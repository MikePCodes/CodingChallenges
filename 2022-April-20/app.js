// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//Define Vowels
const vowels = ["a", "e", "i", "o", "u"]

function getCount(str) {
    //Start count
    let count = 0;

    //Loop to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    //Return number of vowels
    return count

}