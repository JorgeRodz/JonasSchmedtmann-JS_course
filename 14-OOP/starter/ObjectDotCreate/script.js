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

const pedro = Object.create(PersonProto); // Here we set the 'PersonProto' itself as the prototype of "pedro"
console.log(pedro);
pedro.firstName = 'Pedro';
pedro.birthYear = 2002;
pedro.calcAge();
console.log(`pedro.__proto__ === PersonProto`, pedro.__proto__ === PersonProto);

const jorge = Object.create(PersonProto); // Here we set the 'PersonProto' itself as the prototype of "jorge"
// Using the init() method on PersonProto...this is posible because we set the PersonProto as the prototype for 'jorge' object
jorge.init('Jorge', 1998);
jorge.calcAge();
