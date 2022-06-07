// Cat years, Dog years

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const animalYears = (humanYears, animal) => {
    let years = 0
    const increment = animal === 'cat' ? 4 : animal === 'dog' ? 5 : 0
    for (let i = 0; i <= humanYears; i++) {
        if (i === 1) years += 15
        if (i === 2) years += 9
        if (i > 2) years += increment
    }
    return years
}
const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    animalYears(humanYears, 'cat'),
    animalYears(humanYears, 'dog'),
]