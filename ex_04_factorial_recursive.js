const prompt = require('prompt-sync')();
function factorial(n) {
  if (n === 0) return 1;
  else if (n < 0) throw new Error("Negative numbers are not allowed");
  return n * factorial(n - 1);
}

inputFactorial = prompt("Enter a number to calculate its factorial: ");
console.log(factorial(inputFactorial));