import readlineSync from 'readline-sync';
import sayHi from './cli.js';

export function genericRandomNumber(theFactor) {
  const randomNumber = Math.trunc(Math.random(1, 100) * theFactor);
  return randomNumber;
}

export default function runEvenGame() {
  const name = sayHi();
  console.log(console.log('Answer "yes" if the number is even, otherwise answer "no".'));
  let count = 0;
  const messageForWin = `Congratulations, ${name}!`;
  do {
    const randomNumber = genericRandomNumber(100);
    const answer = readlineSync.question(
      `Question: ${randomNumber}\nYour answer: `
    );
    if (answer === 'yes' || answer === 'no') {
      if (randomNumber % 2 === 0 && answer === 'yes') {
        console.log('Correct!');
      } else if (randomNumber % 2 === 0 && answer !== 'yes') {
        console.log(
          `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`
        );
        break;
      } else if (randomNumber % 2 !== 0 && answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(
          `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
        );
        break;
      }
    } else {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    }
    count += 1;
  } while (count < 3);
  if (count === 3) {
    console.log(messageForWin);
  }
}
