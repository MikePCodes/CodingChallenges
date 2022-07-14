// Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(...range) {
    const rangeSort = range.sort((a, b) => a - b)
    if (rangeSort[0] === rangeSort[1]) return rangeSort[0]

    let result = 0
    for (let i = rangeSort[0]; i <= rangeSort[1]; i++) result += i

    return result
}
