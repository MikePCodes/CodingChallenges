// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    if (array.length === 0) {
        return 0
    }
    const result = array.reduce((a, b) => a + b, 0)
    const totalItems = array.length

    return result / totalItems
}