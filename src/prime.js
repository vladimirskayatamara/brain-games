import readlineSync from "readline-sync";
import sayHi from "./cli.js";
import { genericRandomNumber } from "./even.js";

function simpleNumber(number) {
  if (number > 1) {
    for (let index = 2; index < number; index += 1) {
      if (number % index === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export default function runPrimeGame() {
  const name = sayHi();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let count = 0;
  const messageForWin = `Congratulations, ${name}!`;
  do {
    const randomNumber = genericRandomNumber(100);
    const answer = readlineSync.question(
      `Question: ${randomNumber}\nYour answer: `
    );
    if (answer === "yes" || answer === "no") {
      if (simpleNumber(randomNumber) === true && answer === "yes") {
        console.log("Correct!");
      } else if (simpleNumber(randomNumber) === true && answer !== "yes") {
        console.log(
          `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`
        );
        break;
      } else if (simpleNumber(randomNumber) === false && answer === "no") {
        console.log("Correct!");
      } else {
        console.log(
          `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
        );
        break;
      }
    } else {
      console.log(
        'Answer "yes" if given number is prime. Otherwise answer "no".'
      );
      break;
    }
    count += 1;
  } while (count < 3);
  if (count === 3) {
    console.log(messageForWin);
  }
}
