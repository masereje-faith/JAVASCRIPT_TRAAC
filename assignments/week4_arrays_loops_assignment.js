//🔢 Task 1 — Working With Numbers

const numbers = [5, 12, 7, 20, 33, 42, 9, 18, 27, 60];
console.log(numbers.length)

//! Focus on this
function printOddNumbers() {
    // Initialization, Condition, Afterthought
    for (i = 0; i <= numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i])
        }
    }
}
printOddNumbers()

function printNumbersGreaterThan20() {
    for (i = 0; i < numbers.length; i = i + 1) {
        if (numbers[i] > 20) {
            console.log(numbers[i])
        }
    }
}
printNumbersGreaterThan20()

console.log("----------------------");

//! Focus on this
function countEvenNumbers() {
    let count = 0;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log("These are even numbers: ",countEvenNumbers())

console.log("----------------------");

//🧮 Task 2 — Score Analysis
const scores = [45, 67, 82, 90, 54, 76, 30, 88, 100];

function printPassedScore() {
    for (i = 0; i < scores.length; i++) {
        if (scores[i] >= 50) {
            console.log(scores[i])
        }
    }
}
printPassedScore()

console.log("----------------------");

function printFailedScores() {
    for (i = 0; i <= scores.length; i++) {
        if (scores[i] < 50) {
            console.log(scores[i])
        }
    }
}
printFailedScores()

console.log("----------------------");

//! Focus on this
function averageScore() {
    if (scores.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];  // This is the same as: total sum = sum + scores[i]
    }
    return sum / scores.length;
}
console.log(averageScore());


const students = ["Mark", "Elizabeth", "Tom", "Christopher", "Ann", "Joseph"];

console.log("----------------------");


function printLongNames() {
    for (i = 0; i < students.length; i = i + 1) {
        if (students[i].length > 6) {
            console.log(students[i])
        }
    }
}
printLongNames()


console.log("----------------------");


function printShortNames() {
    for (i = 0; i < students.length; i = i + 1) {
        if (students[i].length <= 5) {
            console.log(students[i])
        }
    }
}
printShortNames()

console.log("----------------------");

//! Focus on this
function countEvenLengthNames() {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].length % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEvenLengthNames())

const values = [2, 5, 8, 11, 14, 17, 20, 23];

console.log("----------------------");

//! Focus on this
function printEvenNumbersGreaterThan10() {
    for (let i = 0; i < values.length; i++) {
        const currentValue = values[i];
        // Logic of determining greater than in even numbers
        if (currentValue > 10 && currentValue % 2 === 0) { // || : the or operator
            console.log(values[i]);       
        }
    }
}
printEvenNumbersGreaterThan10()


const randomNumbers = [3, 7, 9, 12, 15, 19, 21, 25];

console.log("----------------------");

function printMultiplesOfThree() {
    for (i = 0; i < randomNumbers.length; i++) {
        if (randomNumbers[i] % 3 === 0) {
            console.log(randomNumbers[i])
        }
    }
}
printMultiplesOfThree()

// x += 5
// x = x + 5

//i++
// i = i + 1

// % 2 === 0   Even Numbers
// % 2 !== 0   Odd numbers