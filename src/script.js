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

const removes = [...new Set(arrIn)]
// console.log(removes.at(-1));
// console.log(removes);


// another way fibonacci

const fib = steps =>{
  if(steps < 2) return steps;

  return fib(steps - 2) + fib(steps - 1)
}

console.log(fib(17));