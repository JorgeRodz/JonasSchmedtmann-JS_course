/*--------------- Parent Class -----------------*/
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
  static displayName = 'Person Class';
}

/*--------------- Child Class -----------------*/

/*- When no add new properties to the child class -*/

/* If we will not add new properties to Object instances we can omit the constructor function, because the parent class will handle this, we can still add Instance methods and static methods and properties to it */
class StudenClNoNewProperties extends PersonCl {
  /* Instance methods */
  // This methods will add to Class.prototype
  presentation() {
    console.log(`Hi! my name is ${this.fullName}`);
  }

  /* Static methods and properties */
  static IAmStudent() {
    return true;
  }
}

const pedro = new StudenClNoNewProperties('Pedro Perez', 1992);
// const pedro = new StudenCl('Pedro Perez', 1992, 'Computer Science');

/* --------------------------------- *
/*- When add new properties to the child class -*/

/* If we plant to add new properties we should always first call the super() function in order to stablish first the properties we already have on the parent class, then we can add the new class properties */

class StudenCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // instance properties
    super(fullName, birthYear); // This function will be always at the top of the constructor function
    this.course = course;
  }

  /* Instance methods */
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2022 - this.birthYear
      } years old, but as a Student I feel more older`
    );
  }

  // This methods will add to Class.prototype
  /* Static methods and properties */
}

const martha = new StudenCl('Martha Thomas', 1998, 'History');

console.log(martha);
console.log(martha.introduce());
console.log(martha.calcAge());

class ProfesorCl extends PersonCl {
  constructor(fullName, birthYear, subjects) {
    /* instance properties */
    // Same properties as class parent
    super(fullName, birthYear); // This function will be always at the top of the constructor function
    // new child properties
    this.subjects = subjects;
  }

  /* getters and setters */

  /* Instance methods */
  // This methods will add to Class.prototype

  /* Static methods and properties */
}

const xavier = new ProfesorCl('Xavier Kardo', 1980, [
  'History',
  'Dance',
  'Phisics',
  'Biology',
]);

console.log(xavier);
