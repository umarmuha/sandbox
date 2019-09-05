// Example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes 

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100

  // I am interested to find out when we are first calculating the area
  // and then using getter to get the area instead of just invoking the method on the 
  // newly created object? Is that just to save time from not having to call a method ()?
  console.log(square.calcArea()); // 100 result is same as expected