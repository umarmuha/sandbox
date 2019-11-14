// function greet () {
//     console.log(`Hello, my name is ${this}`)
//   }

//   const user = {
//     name: 'Tyler',
//     age: 27,
//   }

//   greet('Yyler');

// function copyReverse(array) {
//   const arrayLength = array.length;
//   const copy = Array(arrayLength);
//   for (let index = 0; index < arrayLength; index++) {
//     copy[index] = array[arrayLength - 1 - index];
//   }

//   return copy;
// }

// const original = [..."Hello"];
// const reversed = copyReverse(original);


// Swap Numbers
const swapNumbers = (array, i, j) => {
  // Save Element Value (Because It Will Change When We Swap/Reassign)
  let temp = array[i];
  // Assign Element2 To Element1
  array[i] = array[j];
  // Assign Element1 To Element2
  array[j] = temp;
};
// Bubble Sort
const bubbleSort = (array) => {
  // Iterate Over Array From First Element
  for (let i = 0; i < array.length; i++) {
    // Iterate Over Array From Succeeding Element
    for (let j = 1; j < array.length; j++) {
      // Check If First Element Is Greater Proceeding Element
      if (array[j - 1] > array[j]) {
        // Swap Numbers
        swapNumbers(array, j - 1, j);
      }
    }
  }
  // Return Array
  return array;
};

console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]))