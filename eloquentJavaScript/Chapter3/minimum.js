/**
 * The previous chapter introduced the standard function Math.min that returns its smallest argument. 
 * We can build something like that now. 
 * Write a function min that takes two arguments and returns their minimum.
 */

function min(x, y) {
    if (x > y) {
        return y;
    } else {
        return x;
    }
}

function printMinimum(x, y) {
    console.log(`${min(x,y)} is the minimum number`)
}

printMinimum(17, -10);


// BOOK SOLUTION
function min(a, b) {
    if (a < b) return a;
    else return b;
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10