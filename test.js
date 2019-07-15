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


class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
    }
}

    const players = [];
    const player1 = new Player('Johnny Bravo', 1, '#e15258', true);
    const player2 = new Player('Bat Man', 2, '#e59a13');
    players.push(player1, player2)
    console.log(players);
