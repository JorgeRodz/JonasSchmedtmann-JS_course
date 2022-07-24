/*
Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!

Test data:
Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

class Car {
  // Private Instance properties

  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  /* getter and setters */

  /* Instance methods */
  // This methods will add to Class.prototype
  accelerate() {
    this.speed += 10;
    console.log(`Accelerate: ${this.make} is going at ${this.speed} km/h`);
  }
  break() {
    this.speed -= 5;
    console.log(`Break: ${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  /* Instance private methods */
  // This methods will be only be available inside the class

  /* Static methods and properties */
  /* Static Private methods and properties - This methods will be only available inside the class and by the class itself */
}

const ford = new Car("ford", "120");
console.log(ford);

class Ev extends Car {
  // Private Instance properties
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  /* getters and setters */

  /* Instance methods */
  // This methods will add to Class.prototype
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} charge now is ${this.#charge}%`);
    return this;
  }
  // Adding Ev own accelerate method in order to make a new usage on Ev instances objects, this method will be call instead of the old own on the Car
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  /* Static methods and properties */
}

const rivian = new Ev("Rivian", 120, 23);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .chargeBattery(50)
  .break()
  .accelerate()
  .break();
