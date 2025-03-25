/* eslint-disable no-unused-vars */
// prime number check

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(19));

// array rotation

function arrayRotation(arr, arrrotation) {
  for (let i = 0; i < arrrotation; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

// console.log(arrayRotation([1, 2, 3, 4, 5], 2));

// even or odd

function isEvenOrOdd(n) {
  if (n === undefined) {
    return 'Please provide number';
  }
  return n % 2 === 0 ? 'even' : 'odd';
}

// console.log(isEvenOrOdd(5));

// reverse string

function reverseString(str) {
  return str.split('').reverse().join(' ');
}

// console.log(reverseString('kader'));

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(9));

function isPalindrome(str) {
  let rev = str.split('').reverse().join('');
  return str === rev;
}

// console.log(isPalindrome('racecar'));

const arrIn = [2, 3, 3, 4, 5, 6, 7, 7, 8];

const removes = [...new Set(arrIn)];
// console.log(removes.at(-1));
// console.log(removes);

//todo: another way fibonacci

const fib = (steps) => {
  if (steps < 2) return steps;

  return fib(steps - 2) + fib(steps - 1);
};

// console.log(fib(17));

// vowel count

function Vowel(str) {
  const arr = [...str];
  return arr.filter((ele) => ['a', 'e', 'i', 'o', 'u'].includes(ele)).length;
}

// console.log(Vowel('kader'));

// returning string :-

const greet = (name) => {
  return `Hello, ${name} how are you doing today!`;
};

// console.log(greet('kader'));

// year to century

const century = (year) => {
  return Math.ceil(year / 100);
};

// console.log(century(2020));

// keep hydrated
const litres = (time) => {
  return Math.floor(time * 0.5);
};

// console.log(litres(12));

// divisible
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// console.log(isDivisible(12, 4, 6));

// who likes this

function likes(names) {
  let lenghts = names.length;
  let output;

  if (lenghts === 0) {
    output = 'one one like this';
  } else if (lenghts === 1) {
    output = `${names} like this !`;
  } else if (lenghts === 2) {
    output = `${names[0]} and ${names[1]} like this !`;
  }

  return output;
}

// console.log(likes(['abdul', 'kader']));

// highest to lowest

function highAndlow(num) {
  const arr = num;

  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

// console.log(highAndlow([1, 3, 4, 5]));

// find largest number

function LargeNumber(arr) {
  let large = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }

  return large;
}
// console.log(LargeNumber([78, 123, 50, 58]));

// sum of array

function Sumof(arr) {
  return arr.reduce((acc, sum) => acc + sum, 0);
}

// console.log(Sumof([23, 45, 89]));

// string occurence

function Charat(str, char) {
  return str.split(char).length - 1;
}
// console.log(Charat('kader', 'i'));

// find a missing number from an array

function MissingNumber(arr) {
  // const misnum = arr.length + 1;
  // const min = Math.min(...arr);
  // const min = 1;

  // math max create
  const max = Math.max(...arr);

  const expected = (max * (max + 1)) / 2;

  const actual = arr.reduce((sum, num) => sum + num, 0);
  return expected - actual;
}

// console.log(MissingNumber([1, 3, 4, 5]));

// desending number

function descendingOrder(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

// console.log(descendingOrder(12345));

// fizz and buzz

function fizzbuzz() {
  let output;

  for (let num = 0; num <= 100; num++) {
    output = '';
    if (num % 3 === 0) output = 'Fizz';
    if (num % 5 === 0) output = 'Buzz';
    console.log(output || num);
  }
}

// fizzbuzz();

// truncate a number

function truncateString(str, charCount) {
  if (str.length > charCount) {
    return str.substr(0, charCount - 3) + '...';
  } else {
    return str;
  }
}

// console.log(truncateString('kadermolla', 7));

// remove vowel from the text

function removeVowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// console.log(removeVowel('I love javascript'));

// highest and lowest number

function highAndLow(numbers) {
  const arr = numbers.split(' ');
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

// console.log(highAndLow('1 2 4 5'));

// descending number

function Descending(number) {
  return parseInt(
    number
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

// console.log(Descending(123456789));

// prime number

function isPrimes(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// console.log(isPrimes(19));

// returning string

function greets(name) {
  return console.log(`Hello, ${name} how are you doing today!`);
}

// greets('kader')

// move zero to the end

function moveZeroes(nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  return nums;
}

// console.log(moveZeroes([0, 1, 0, 3, 12]));

// duplicate number

function Duplicate(arr) {
  return [...new Set(arr)];
}

// console.log(Duplicate([1,1,2,3,2,3]));

// factorial

function factorials(n) {
  return n === 0 ? 1 : n * factorials(n - 1);
}

// console.log(factorials(6));

// longest sentence

function longWord(sentence) {
  return sentence
    .split(' ')
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ''
    );
}

// console.log(longWord('i am good man'));

// anagram word

function Anagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// console.log(Anagram('listen', 'silent'));

// century from year

function centurys(year) {
  return Math.ceil(year / 100);
}

// console.log(centurys(1709));

// vowel count

function countVowel(str) {
  return str.match(/[aeiou]/gi).length;
}

// console.log(countVowel('this also me here'));

// javascript asynchronous bevaior

// a. Callbacks
function fetchData(callback) {
  setTimeout(() => {
    // console.log('Data Received');
    callback();
  }, 2000);
}

function processData() {
  // console.log('data processing');
}

fetchData(processData);

// b. Promises

function fetchDataPromises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received!');
    }, 2000);
  });
}

fetchDataPromises()
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// create person using function and introduce / class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I am ${this.name} and I am ${this.age} years old`;
  }
}

const person1 = new Person('Rasel', 30);

// console.log(person1.introduce());

// animal class create

class Animal {
  #secret = 'my secret';
  constructor(name, sound) {
    this._name = name;
    this._sound = sound;
  }

  speak() {
    return `the ${this._name} says ${this._sound}`;
  }

  getSecret() {
    return this.#secret;
  }
}

const animal = new Animal('dog', 'woof');
// console.log(animal.speak());
// console.log(animal.getSecret());

const arr = [1, 2, 3, 4, 5, 6];
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
// console.log(shuffle(arr)); // this function modify

// Encapsulation

// todo: deposit, withdraw, getbalance
class BankBalance {
  #balance;
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.#balance = balance;
  }

  deposit(amount) {
    // for deposit amount of money function
    this.#balance += amount;
    console.log(`you depostion ${amount} and balance is ${this.#balance}!`);
  }

  withdraw(amount) {
    // withdraw money function
    if (amount > this.#balance) {
      console.log(`less amount of money you have in your account number!`);
      return;
    }
    this.#balance -= amount;
    console.log(`you withdraw ${amount} and main balace is ${this.#balance}!`);
  }
}

const bankbalance = new BankBalance('2839595', 100);
// bankbalance.deposit(400);
// bankbalance.withdraw(600);

// abstraction

//  todo: create car for understand the way.

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  startCar() {
    this.#iginiteEnige();
    console.log(`${this.brand} is start now!`);
  }

  #iginiteEnige() {
    console.log(`car started!`);
  }
}

const car = new Car('Mercedes');

// car.startCar();

// inheritance

class Vehicle {
  constructor(driver, wheel) {
    this.driver = driver;
    this.wheel = wheel;
  }
}

class Bus extends Vehicle {
  constructor(driver, wheel, seats) {
    super(driver, wheel);
    this.seats = seats;
  }
}

class Truck extends Vehicle {
  constructor(driver, wheel, capacity) {
    super(driver, wheel);
    this.capacity = capacity;
  }
}

const bus = new Bus('kader', 8, 50);
const truck = new Truck('molla', 10, 500);

// ? abstraction and encapsulation

class Animals {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (newName.length > 2) {
      this.#name = newName;
    } else {
      console.log(`text must be 3 charecter`);
    }
  }

  speak() {
    throw new Error('speak methods call in the subclass');
  }
}

class Dog extends Animals {
  speak() {
    console.log(`${this.name} : Buddy says woof woof!`);
  }
}

class Cat extends Animals {
  speak() {
    console.log(`${this.name} : says meow meow!`);
  }
}

const dogs = new Dog('dog');
const cats = new Cat('cattty');


class BMWCAR{
  #brand
  #model
  #year
  constructor(){}
}