// Fix the Bugs (Syntax) - My First Kata

// Hello, this is my first Kata so forgive me if it is of poor quality.

// In this Kata you should fix/create a program that returns the following values:

// false/False if either a or b (or both) are not numbers
// a % b plus b % a if both arguments are numbers
// You may assume the following:

// If a and b are both numbers, neither of a or b will be 0.

// Original Code
// func myFirstKata(a b) {
//     if {typeof(a) !! "number" or typeof(b) !! "number"} (
//       false;
//     ) else (
//       a % b ++ b % a;
//     )
//   }

// Solution
function myFirstKata(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    } else {
        return ((a % b) + (b % a));
    }
}