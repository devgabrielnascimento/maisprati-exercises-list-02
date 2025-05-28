const prompt = require("prompt-sync")();

let randomNumber;
const randomNumberToGuess = Math.floor(Math.random() * 100) + 1;
let youWin = false;
let tries = 0;

console.log("Welcome to the Number Guessing Game!");

while (!youWin) {
  randomNumber = Number(prompt("Enter a number between 1 and 100: "));

  const difference = Math.abs(randomNumber - randomNumberToGuess);

  if (Number.isNaN(randomNumber) || randomNumber < 1 || randomNumber > 100) {
    console.log("Invalid number. Please enter a number between 1 and 100.");
    continue;
  }
  tries++;

  if (randomNumber === randomNumberToGuess) {
    console.log(
      "Congratulations! You guessed the number! The number was " +
        randomNumberToGuess +
        "."
    );
    console.log(resultMessage());
    youWin = true;
  } else {
    if (difference < 10) {
      console.log("You are very close!");
    } else if (difference > 80) {
      console.log("You are very far from the number.");
    }

    if (randomNumber < randomNumberToGuess) {
      console.log("The number is higher than your guess.");
    } else {
      console.log("The number is lower than your guess.");
    }

    console.log("Try again!\n");
  }
}

function resultMessage() {
  if (tries === 1) {
    return "Wow! You guessed the number on your first try!";
  } else if (tries < 5) {
    return `Great job! You guessed the number in just ${tries} tries!`;
  } else {
    return `It took you a bit longer, but you guessed the number in ${tries} tries!`;
  }
}

console.log("Thanks for playing!");
