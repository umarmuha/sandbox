let size = 8;
let baord = "";

for (let column = 0; column < size; column++) {
    for (let row = 0; row < size; row++) {
        if ( (column+row) % 2 ===0) {
            baord += "#";
        } else {
            baord += " "
        }
    }
    baord += "\n"
}
console.log(baord);