/*
Coding Challenge #3

Your tasks:
  1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
  2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
  3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h with a charge of 22%'
  4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definition of polymorphism 😉

  Test data:
  - Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Accelerate: ${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`Break: ${this.make} is going at ${this.speed} km/h`);
};

const normalCar = new Car("ford", 120);

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
// Linking prototypes
Ev.prototype = Object.create(Car.prototype);
// Adding method to EV
Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
// Adding Ev own accelerate method in order to make a new usage on Ev instances objects, this method will be call instead of the old own on the Car
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

const tesla = new Ev("tesla", 120, 23);
console.log(tesla);
