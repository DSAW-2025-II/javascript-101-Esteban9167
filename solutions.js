// Sum of Two Numbers
function sum(a, b) {
  return (a + b)
}

// Factorial of a Number
function factorial(n) {
  let res = 1;
  for (let i=n; i >= 1; i--) {
    res *= i;
  }
  return (res)
}

// Find the Largest Number
function findLargest(arr) {
  let num = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return (num)
}

// Count Vowels in a String
function countVowels(str) {
  const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}


// Check if a Number is Prime
function isPrime(n) {
  let sq = 0;
  if (n <= 1) {
    return false; // los menores o iguales a 1 no son primos
  }

  sq = Math.round(Math.sqrt(n));
  for (let i = 2; i <= sq; i++) {   // empieza desde 2, no desde 1
    if (n % i === 0) {
      return false; // si tiene un divisor → no es primo
    }
  }

  return true; // si no encontró divisores → es primo
}



module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
