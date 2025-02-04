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

function Sumof(arr){
  return arr.reduce((acc, sum) => acc + sum, 0)
}

console.log(Sumof([23, 45, 89]));
