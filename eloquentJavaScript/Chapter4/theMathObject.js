// THE MATH OBJECT
function randomPointsOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    console.log(angle);
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    };
}
console.log(randomPointsOnCircle(2));

// Output will be between 0-10. So 10 itself will never show up in output.
console.log(Math.floor(Math.random() * 10));

// Ceil will provide a whole number which means 10 can be an output as well.
console.log(Math.ceil(Math.random() * 10));

// Almost same as the floor method.
console.log(Math.round(Math.random() * 10));