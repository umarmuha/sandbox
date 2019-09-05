/**
 * Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
 * For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
 * The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
 * The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
 * Neither may use the standard reverse method.
 */

 function reverseArray(array) {
     let reverse = [];
     for (let index = (array.length - 1); index >= 0; index--) {
         reverse.push(array[index]);
     }
     return reverse;
 }

 console.log(reverseArray([1,2,3,4]));