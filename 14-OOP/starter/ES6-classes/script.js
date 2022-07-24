'use strict';

/*-------------------------------------------------- Classes Introduction ------------------------------------------------------*/

/*---------------- Create a class - instances methods and properties --------------------*/

// class expresion
// const PersonClDeclaration = class {}

/* Notes
1.- Classes are NOT hoisted
2.- We can pass classes as parameters and return it from a function
3.- Classes are executed on strict mode
*/

// Class expresion
class PersonCl {
  constructor(fullName, birthYear) {
    // instance properties
    this._fullName = fullName;
    this.birthYear = birthYear;
  }

  /* Instance methods */
  // This methods will attach to PersonCl.prototype, so every instances objects will have it
  calcAge() {
    console.log(`${this.fullName}: I'm ${2022 - this.birthYear} years old`);
  }
  goodBye() {
    console.log(`${this.fullName}: Good bye! `);
    console.log(this.constructor);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`The given ${name} is not full name`);
  }
  get fullName() {
    return this._fullName;
  }

  /* Static methods and properties */
  static speakSpanish() {
    console.log('Hola amigo! ');
  }
  static displayName = 'Persona';
}

PersonCl.hey = function () {
  console.log('Hey there 🖖🏼');
  console.dir(this);
};
PersonCl.hey();
PersonCl.speakSpanish();
console.log(PersonCl.displayName);

const maria = new PersonCl('Maria Ortiz', 1996);
console.log(maria);
maria.calcAge();

console.log(maria.__proto__ === PersonCl.prototype);

PersonCl.prototype.sayHi = function () {
  console.log(`${this.fullName}: Hi! `);
};

maria.sayHi();
maria.goodBye();
console.log(maria.age);

// PersonCl.myFunction = function () {
//   console.log('This is a function');
// };

console.dir(PersonCl);

const walter = new PersonCl('Walter White', 2001);

console.log('----------------------');

/*---------------- class - getter and setters --------------------*/
/*
Accessor Property
In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

get - to define a getter method to get the property value
set - to define a setter method to set the property value

*/
const account = {
  owner: 'Jorge',
  movements: [612, 124, 234, 321],
  get latest() {
    return this.movements[this.movements.length - 1];
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// class Person {
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
// }

// let person = new Person('Jane Doe');
// console.log(person.name);
