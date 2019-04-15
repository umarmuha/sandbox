// Make a dropbox file. One important thing I learned is that you can set
// setters and getters on a class as well as an object literal

// let thing = {
//     a : 7,

//     get b(){
//         return (this.a + 1);
//     },

//     get c(){
//         return this.a = (this._c / 2);
//     },

//     set c(c){
//         this._c = c;
//     }
    
// };

// console.log(thing.a);
// console.log(thing.b);

// thing.c = 50;
// console.log(thing.c);


// The example above I used the backing property. 
// I want to test if I dont set the name of the property and the passed in Parameter the same and then I DONT have to use a backing property 

    

let thing = {
    a : 7,

    get b(){
        return (this.a + 1);
    },

    get c(){
        return this.a = (this._c / 2);
    },

    set c(x){
        this._c = x;
    }
    
};

console.log(thing.a);
console.log(thing.b);

thing.c = 50;
console.log(thing.c);