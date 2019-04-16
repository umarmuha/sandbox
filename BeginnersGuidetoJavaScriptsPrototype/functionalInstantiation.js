// Now we encapsulate the logic from the Object created earlier 
// inside of a function that we can invoke whenever we needed to create a new animal

function animal(name, energy) {
    let animal = {};
    animal.name = 'Neo';
    animal.energy = 10;

    animal.eat = function (amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    }

    animal.sleep = function (length) {
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    };

    animal.playing = function (length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    };
};

const neo = animal('Neo', 7);
const snoopy = Animal('Snoopy', 11);

``` 
    This approach can be made better since everytime we create the animal 
    "instance" we are creating the eat sleep and play functions. 
    There’s no reason to re-create those methods as we’re currently doing whenever we create a new animal.
    Lets make it better in the Functional Instantiation with Shared Methods
    Reference the online article from Tyler. 
```