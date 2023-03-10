// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// create a new const labeled as "longest"
// create a if statement comparing the lengths of set 1 and set 2
// out of the comparison of the two strings, out put will be with the longer length.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"
// const longest = (fruit1, fruit2) => {
//     if(fruit1.length > fruit2.length){
//         return `(fruit2)`
//     }
// }
// console.log(longest(fruit1,fruit2))
// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"

// const longest = (fruit3, fruit4) => {
//     if(fruit3.length > fruit4.length){
//         return `(fruit3)`
//     }
// }
// console.log(longest(fruit3,fruit4))
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Create a const "boiling" is equal to the input of "temp"
// and the input if it is at 212 display "at boiling point"
// at 350 input is above boiling point
// below 212 is  below boiling point


// const temp1 = 42
// // Expected output: "42 is below boiling point"

// const temp2 = 350
// // Expected output: "350 is above boiling point"

// const temp3 = 212
// // Expected output: "212 is at boiling point"
// const boiling= (temp) => {
//         if(temp > 212){
//         return `(number) is above boiling point`
//     }   else if (temp === 212){
//         return `(number) is at boiling point`
//     }
//         else if (temp < 212){
//             return `(number) is below boiling point`
//         }
// }
// console.log (boiling(42))
// console.log (boiling(350))
// console.log (boiling(212))
///***could not figure out to get outcome WITH number ***

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// create a new array = adding the sum of .length of the two given arrays
// output will have the .length combined

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// const array= (array1, array2) =>{
//     return (array1.length + array2.length)
// }
// console.log(array())


// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// Create a const "reverse" = .split "currentCohort"

//const currentCohort = "Alpha 2023"
// Expected output: "3202 ahplA"

// const reverse = currentCohort.split
// console.log(reverse)

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: Create 2 const given vaules 1,2 labeled as 42,10
// console log .lastIndexOf with the given values which should produce the expected output  which is their position in the array.

//  const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
//  const givenValue1 = 42
// // // Expected output: 7

//  const givenValue2 = 10
// // // Expected output: 8
//  console.log(myNumbers.lastIndexOf(givenValue1))
//  console.log(myNumbers.lastIndexOf(givenValue2))
// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: Create new const variables for each array
// Use .sort((a, b) => a-b) to sort and then use .reverse to finalize LARGEST to SMALLEST

const sanDiegoSummerTemperatures1 = [79, 80, 72, 73, 82, 77, 76]
// // Expected output: [82, 80, 79, 77, 76, 73, 72]
sanDiegoSummerTemperatures1.sort((a, b) => a - b)

const lrgSml1 = sanDiegoSummerTemperatures1.reverse()
console.log(lrgSml1)
const sanDiegoWinterTemperatures2 = [59, 68, 62, 59, 66, 67, 66]

// // Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoWinterTemperatures2.sort((a, b) => a - b)
const lrgSml2 = sanDiegoWinterTemperatures2.reverse()
console.log(lrgSml2)