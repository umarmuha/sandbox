/** 
    The sum of a range

    The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

    console.log(sum(range(1, 10)));

    Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
*/

// function range(start, end) {
//     let array = [];
//     for (let index = start; index <= end; index++) {
//         array.push(index);
//     }
//     return array;
// }

/** 
    As a bonus assignment, modify your range function to take an optional third argument 
    that indicates the “step” value used when building the array. 
    If no step is given, the elements go up by increments of one, corresponding to the old behavior. 
    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
    Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
    console.log(range(1,10));
*/


// /**
//     MY FIRST APPROACH. 
//     The issue with this approach is when the Start is > End and 
//     step is negative then the output will fail. The other issue is I have to write more code this way. 
//     Defining a condition for step < or > 0 and when there is no step. 
// */
// function rangeWithStep(start, end, step) {
//     let array = [];
//     if (step > 0) {
//         for (let index = start; index <= end; index += step) {
//             array.push(index);
//         }
//     } else if (step < 0) {
//         for (let index = start; index >= end ; index += step) {
//             array.push(index);
//         }
//     } else {
//         for (let index = start; index <= end; index++) {
//             array.push(index);
//         }
//     }
//     return array;
// }
// console.log(rangeWithStep(1, 10, -1))

/**
    MY SECOND ATTEMPT. THE BOOK SOLUTION APPROACH. 
    This approach uses the ternary operator, assigning a defauly value to the Step. 
    Write less code and accomplish all the scenarios of Step < > to 0 and when no step 
    is defined,  there is a default value of 1 or -1. 
 */

 function range(start, end, step = start < end ? 1 : -1) {
     let array = [];
     if (step > 0) {
         for (let index = start; index <= end ; index += step) {
             array.push(index);
         }
     } else {
         for (let index = start; index >= end ; index += step) {
             array.push(index);
         }
     }
     return array;
 }


// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
// Run the example program and see whether it does indeed return 55.
function sum(array) {
    let sum = 0
    for (const number of array) {
        sum += number;
    }
    return sum;
}



console.log(range(1,10));
console.log(range(10,1));
console.log(sum(range(1,10)));