// This example is taken from https://tylermcginnis.com/beginners-guide-to-javascript-prototype/

// Showcasing a simple JS Object and its properties
let animal = {};
animal.name = 'Neo';
animal.energy = 10;

animal.eat = function (amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}

