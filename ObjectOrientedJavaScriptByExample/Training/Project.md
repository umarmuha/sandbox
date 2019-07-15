# Board and Space Class Constructor Methods

### Assignment:

Project file location: _stage2-step8_

1.  Create a constructor method for the Board class according to the requirements and guidelines below.
2.  Create a constructor method for the Space class according to the requirements and guidelines below.
3.  Visit the Treehouse Community and post any questions or feedback you have for other students regarding the Board and Space class constructor methods and properties.

* * *

### The "Why"

The Board and Space classes each have their own constructor methods.

The Board class has the following properties (outlined further in the _requirements_ section below): `rows`, `columns`, and `spaces`.

If you look at a physical version of a Four in a Row, it's easy to see that it's laid out in a grid, with a series of rows and columns. Every time a row intersects with a column there is a cut out space that could eventually be home to a token.

On the Board class, the `rows` and `columns` properties indicate the number of rows and columns that the board has, and the Spaces property is an array of all the spaces on the board. Each of these spaces has it's own properties and methods as well, which is why we created a Space class.

The Space class has the following properties (outlined further in the _requirements_ section below): `x`, `y`, `id`, and `token`.

On the Space class, the `x` and `y` properties represent the column and row, respectively, of the space's location on the board. The `id` property gives us a way to identify the space when it's drawn on our HTML to be seen in browser.

The `token` property, initially set to null, is a way to associate a Token object with the space it's in dropped into.

### Requirements and Guidelines for Board Class Constructor Method

1.  The constructor method should define the following properties: `rows`, `columns`, and `spaces`.
2.  Set the value of the `rows` property to 6.
3.  Set the value of the `columns` property to 7.
4.  Set the value of the `spaces` property to an empty array.

**Note:** So you know, for the `spaces` property, we'll be mimicking the pattern we used for the Player object when we created tokens: the property will eventually be set to a creator method call that returns an array of spaces. We're using the empty array as a placeholder until we get to that point.

### Requirements and Guidelines for Space Class Constructor Method

1.  The constructor method should define the following properties: `x`, `y`, `id`, and `token`.
2.  Set the value of the `x` and `y` properties to the `x` and `y` values passed in as arguments to the constructor method.
3.  Set the `id` property to template literal `space-${x}-${y}`.
4.  Set the `token` property to `null`.
