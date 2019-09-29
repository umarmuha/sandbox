// Coding train example of Higher function. This is also example of a closure function
function multiplier(factor) {
    return x => x * factor;
}

let duplicator = multiplier(2);
let triplecator = multiplier(3);

// Book Example of how function that change other function using higher functions . Also example of closure
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, "returned", result)
    };
}
noisy(Math.min);

// Same example without the use of the arrow functions. Spelled out to do down a layer in abstraction
function noisy(action) {
    return function input(...args) {
        console.log("calling with", args);
        let result = action(...args);
        console.log("called with", args, "returned", result)
    };
}

let set1 = noisy(Math.min);
let set2 = noisy(Math.max);

set1(3,2,1);
set2(10,22,66,78);