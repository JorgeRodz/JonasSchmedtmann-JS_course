'use strict';

////////////////////////////////////////////////////////////////////////////////////

/* -------------------- constructor function -------------------- */
/** We have to used the 'new' operator in order to call a constructor function, otherwise this will not work, when calling a constructor function with the 'new' operator this things happen: **/
// 1. New {} empty object is created
// 2. 'this' keyword correspond to the empty object we previously mention, and assign the object properties and methods
// 3. We assign the prototype to the {}
// 4. function automatically return the object

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside in the constructor function
  // this.calcAge = function () {
  // console.log(`I'm ${2022 - birthYear}`);
  // };
};

const jorge = new Person('Jorge', 1992); // the 'new' operator -> lets developers create an instance of a user-defined object type using a constructor function or one of the built-in object types that has a constructor function.

console.log(jorge);

const maria = new Person('Maria', 2017);
const jack = new Person('Jack', 1975);
console.log(maria, jack);

const jay = 'Jay';

/* The `instanceof` operator tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.*/
console.log(`jorge instanceof Person : ${jorge instanceof Person}`);
console.log(`jay instanceof Person : ${jay instanceof Person}`);

// -------------- My notes ---------------
// let arr = new Array(1, 23, 4, 2);
// let arrValues = [...arr.values()];

// console.log(arrValues);

////////////////////////////////////////////////////////////////////////////////////

/*---------------- Prototypes --------------------*/
// Adding method to the prototype
Person.prototype.calcAge = function () {
  console.log(`I'm ${2022 - this.birthYear}`);
};
// Adding properties to the prototype
Person.prototype.species = 'Home Sapiens';

console.log(Person.prototype);

// We can call calcAge() because the prototype of all this objects are Person, this prototype were assign when call the constructor function to create the objects.
jorge.calcAge();
maria.calcAge();
jack.calcAge();

console.log(jorge.__proto__);
console.log(
  `jorge.__proto__ === Person.prototype : ${
    jorge.__proto__ === Person.prototype
  }`
);

console.log(
  `Person.prototype.isPrototypeOf(jorge) : ${Person.prototype.isPrototypeOf(
    jorge
  )}`
);

// calling the prototype properties on instance objects
console.log(jorge.species, maria.species);
/* hasOwnProperty method in order to know is the property belongs to the instance object or to is prototype */
// This property belongs to the instance object
console.log(
  "jorge.hasOwnProperty('firstName') : ",
  jorge.hasOwnProperty('firstName')
);
// This property belongs to the prototype
console.log(
  "jorge.hasOwnProperty('species') : ",
  jorge.hasOwnProperty('species')
);

console.log(`jorge.__proto__`, jorge.__proto__);
console.log(`jorge.__proto__.__proto__`, jorge.__proto__.__proto__);
console.log(
  `jorge.__proto__.__proto__.__proto__`,
  jorge.__proto__.__proto__.__proto__
);

console.dir(Person.prototype.constructor);

const arr = [1, 1, 3, 3, 2, 2, 5, 5, 12, 12, 53, 43, 34, 34]; // creating an Array this way is the same as calling new Array(1, 2, 34, 5), just like the line below
const arr2 = new Array(1, 1, 3, 3, 2, 2, 5, 5, 12, 12, 53, 43, 34, 34);
console.log(arr, arr2);

console.log(
  'arr.__proto__ == Array.prototype',
  arr.__proto__ == Array.prototype
);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
const myArrow = x => x + 1;
