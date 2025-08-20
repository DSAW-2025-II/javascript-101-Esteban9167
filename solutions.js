// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n === 0) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

// Find the Largest Number
function findLargest(arr) {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    !arr.every((x) => typeof x === "number")
  ) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > num) num = arr[i];
  }
  return num;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sq = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= sq; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
