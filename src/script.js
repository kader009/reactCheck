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

console.log(isPrime(19));

// array rotation

function arrayRotation(arr, arrrotation) {
  for (let i = 0; i < arrrotation; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(arrayRotation([1, 2, 3, 4, 5], 2));
