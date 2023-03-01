

import readlineSync from 'readline-sync';
import sayHi from './cli.js';
import { genericRandomNumber } from './even.js';

export default function runCalcGame() {
  const name = sayHi();
  console.log('What is the result of the expression?');
  let count = 0;
  const messageForWin = `Congratulations, ${name}!`;
  const operatorArr = ['+', '-', '*'];
  do {
    const firstNumber = genericRandomNumber(100);
    const secondNumber = genericRandomNumber(100);
    const question = readlineSync.question(`Question: ${firstNumber} ${operatorArr[count]} ${secondNumber}\nYour answer: `);
    if (!Number(question)) {
      console.log(`${question} is wrong answer ;(. Correct answer wa`);
      break;
    } else if (firstNumber + secondNumber === +question && operatorArr[count] === '+') {
      console.log('Correct!');
    } else if (firstNumber + secondNumber !== +question && operatorArr[count] === '+') {
      console.log(`${question} is wrong answer ;(. Correct answer was ${firstNumber + secondNumber}\nLet's try again, ${name}!`);
      break;
    } else if (firstNumber - secondNumber === +question && operatorArr[count] === '-') {
      console.log('Correct!');
    } else if (firstNumber - secondNumber !== +question && operatorArr[count] === '-') {
      console.log(`${question} is wrong answer ;(. Correct answer was ${firstNumber - secondNumber}\nLet's try again, ${name}!`);
      break;
    } else if (firstNumber * secondNumber === +question && operatorArr[count] === '*') {
      console.log('Correct!');
    } else if (firstNumber * secondNumber !== +question && operatorArr[count] === '*') {
      console.log(`${question} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}\nLet's try again, ${name}!`);
      break;
    }
    count += 1;
  } while (count < 3);
  if (count === 3) {
    console.log(messageForWin);
  }
}