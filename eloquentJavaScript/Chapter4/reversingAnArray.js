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

console.log(reverseArray([1, 2, 3, 4]));


function reverseInPlace(array) {
    for (let index = 0; index < Math.floor(array.length / 2)  ; index++) { //Using divided by 2 to go all the way till the half of the array.
        let old = array[index]; //Since this index value gets replaced, we are saving it in a variable for assigning it in later step
        array[index] = array[array.length - 1 - index]; //This subtraction will decrement the index from right to left so a[0] = a[4-1-0], so a[0] = a[3]
        array[array.length -1 -index] = old; //Since a[index] is replaced by the a[a.length-1-index] value, its value is replaced by the old value which held a[index]
    }
    return array;
}

console.log(reverseInPlace([1, 2, 3, 4]));