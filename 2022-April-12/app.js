//Find the position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


function position(letter) {
    var arr = "abcdefghijklmnopqrstuvwxyz".split("");
    return ("Position of alphabet: ") + (letter.replace(/[a-z]/ig, function (m) { return arr.indexOf(m.toLowerCase()) + 1 }));
}
