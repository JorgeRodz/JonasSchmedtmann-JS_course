'use strict';

const PersonProto = {
  calcAge() {
    console.log(`${this.firstName}: I'm ${2022 - this.birthYear} years old`);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // Here we set the 'PersonProto' itself as the prototype of "steven"

const StudentsProto = Object.create(PersonProto);
StudentsProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentsProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentsProto);
jay.init('Jay', 2000, 'Computer Science');

console.log(jay);
jay.introduce();
jay.calcAge();
