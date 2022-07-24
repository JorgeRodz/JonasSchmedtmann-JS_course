/*

Coding Challenge #2

  Your tasks:
  1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
  2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
  by 1.6)
  3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
  converts it to km/h before storing the value, by multiplying the input by 1.6)
  4. Create a new car and experiment with the 'accelerate' and 'brake'
  methods, and with the getter and setter.

Test data:
Data car 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, currSpeed) {
    // instance properties
    this.make = make;
    this.currSpeed = currSpeed;
  }

  /* getter and setters */
  get speedUS() {
    return this.currSpeed / 1.6;
  }
  set speedUS(newSpeed) {
    this.currSpeed = newSpeed * 1.6;
  }

  /* Instance methods */
  // This methods will add to Class.prototype
  accelerate() {
    this.currSpeed += 10;
    console.log(`Accelerate: ${this.make} is going at ${this.currSpeed} km/h`);
  }
  break() {
    this.currSpeed -= 5;
    console.log(`Break: ${this.make} is going at ${this.currSpeed} km/h`);
  }

  /* Static methods and properties */
}

const fordCar = new CarCl("Ford", 120);
console.log(fordCar);
fordCar.accelerate();
fordCar.accelerate();
fordCar.break();
fordCar.accelerate();
fordCar.accelerate();
fordCar.break();
fordCar.accelerate();
fordCar.accelerate();

