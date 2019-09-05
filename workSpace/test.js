// a = [{
//     firstName: "John",
//     lastName: "Bravo"
// }, {
//     firstName: "Pam",
//     lastName: "Fix"
// }, {
//     firstName: "Tom",
//     lastName: "Pilaf"
// }];

// b = {
//     firstName: "John",
//     lastName: "Bravo"
// };



// // for (const item of a) {
// //     if (item.firstName === b.firstName) {
// //       console.log("Hurray");  
// //     } 
// //     else {
// //         console.log("not good")
// //     }
// // }

// //console.log(a.includes(b.firstName));


// fruit = ["apple", "banana"];

// console.log(fruit.includes("banana"))

// //console.log(a[0]);



// var arr = [];
// for (var x = 0; x < 100; x++) {
//     arr[x] = [];
//     for (var y = 0; y < 100; y++) {
//         arr[x][y] = x * y;
//     }
// }

// console.log(arr[10][11]);


/**
 * This is sample script from the 4 in a row OOJS project to
 * test the creation of the 2D array
 */


/**
 * Generate 2D array of spaces
 * @return {Array} An array of space objects
 */
// let spaces = []
// for (let x = 0; x < 7; x++) {
//     let columns = []
//     for (let y = 0; y < 6; y++) {
//         const space = `x = ${x}, y=${y}`;
//         columns.push(space);
//     }
//     spaces.push(columns);
// }
// console.log(spaces);


// class Player {
//     constructor(name, id, color, active = false) {
//         this.name = name;
//         this.id = id;
//         this.color = color;
//         this.active = active;
//     }
// }

//     const players = [];
//     const player1 = new Player('Johnny Bravo', 1, '#e15258', true);
//     const player2 = new Player('Bat Man', 2, '#e59a13');
//     players.push(player1, player2)
//     console.log(players);

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber)
// } else {
//     "Please enter a number and try again"
// };


// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number = number + 2;
// }

/**
 * Write a program that calculates and shows the value of 210 (2 to the 10th power)
 * @returns {number} the result
 */

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
// };
// console.log(result);

// let yourName;
// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

// let result = 1;
// for (let counter = 0; counter < 10; counter++) {
//     result = result * 2;
//     console.log(result);
// }

// for (let current = 9; ; current++) {
//     if (current % 7 === 0) {
//         console.log(current);
//         break;
//     };

// }

// let triangle = "#";
// for (let index = 0; index < 7; index++) {
//     if (index === 0) {
//         console.log(triangle);
//     } else {
//         triangle = triangle + "#"
//         console.log(triangle);
//     }   
// };

// for (let index = '#'; index.length < 8; index += '#') {
//     console.log(index);
// }

// for (let index = '#'; index.length < 8; index = index + "#") {
//     console.log(index);

// }

// let x = 10;
// if (true) {
//     let y = 20;
//     var z = 30;
//     console.log(x+y+z);
// };
// console.log(x+z);

// const halve = function (n) {
//     console.log(n);
//     return n/2;
//     // console.log(n); this will not work as return makes the control jump outside the function
//     // so writing the console.log(n); before the return command works.
// }
// console.log(halve(100));


// const hummus = function (factor) {
//     const ingredient = function (amount, unit, name) {
//         let ingredientAmount = factor * amount;
//         if (ingredientAmount > 1) {
//             unit += 's';
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`)
//     }
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// }

// hummus(2);

// // Function to showcase if a default value for an argument is provided 
// function power(base, exponent = 2) {
//     let result = 1;
//     for (let index = 0; index < exponent; index++) {
//         result *= base 
//     }
//     return result;
// }

// console.log(power(4));
// console.log(power(4, 6));

// // OPTIONAL ARGUMENTS
// function power(base, exponent = 2) {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// }
// console.log(power(2,6));

// CLOSURE
// function multiplier(factor) {
//     return function (number) {
//         return number * factor
//     }
// }
// let twice = multiplier(2);
// console.log(twice(5));

// RECURSION
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1)
    }

}
console.log(power(2, 3))


function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)”


function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, history + '5') || find(current * 3, history + '* 3');
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)”


// Bindings can be changed
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";
sayHi(); 


// In ES6 you can use the ... notation to expand the array elements
var array1 = [2, 3, 1];
console.log(Math.min(...array1));


// The lycanthrope’s log - Chapter 4 EJS
let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}


