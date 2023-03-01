import readlineSync from 'readline-sync';
import sayHi from './cli.js';
import { genericRandomNumber } from './even.js';

export default function runProgressionGame() {
  const name = sayHi();
  console.log('What number is missing in the progression?');
  let count = 0;
  const messageForWin = `Congratulations, ${name}!`;

  do {
    const arrOfNumbers = [];
    const randomStep = genericRandomNumber(10);
    let trueNumber = 0;
    for (let index = genericRandomNumber(100); arrOfNumbers.length < 10; index += randomStep) {
      arrOfNumbers.push(index);
    }
    trueNumber = arrOfNumbers[randomStep];
    arrOfNumbers[randomStep] = '..';
    const question = readlineSync.question(`Question: ${arrOfNumbers.join(' ')}\nYour answer: `);
    if (!Number(question)) {
      console.log('Допустим только числовой ввод');
      break;
    } else if (+question === trueNumber) {
      console.log('Correct!');
    } else if (+question !== trueNumber) {
      console.log(`${question} is wrong answer ;(. Correct answer was ${trueNumber}\nLet's try again, ${name}!`);
      break;
    }
    count += 1;
  } while (count < 3);
  if (count === 3) {
    console.log(messageForWin);
  }
}