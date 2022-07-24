class Account {
  // Private Instances properties
  #movements;
  #pin;

  constructor(owner, currency, pin) {
    // instance properties
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.#movements = []; // Protected
    this.locale = navigator.language;

    console.log('Thanks for opening an account');
  }
  /* getter and setters */

  /* Instance methods */
  // This methods will add to Class.prototype
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan()) {
      this.deposit(val);
      console.log('Loan approve');
    }
  }

  // private
  #approveLoan() {
    return true;
  }

  /* Static methods and properties */
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.#movements.push(250); // Property '#movements' is not accessible outside class 'Account' because it has a private identifier
// acc1.#movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
