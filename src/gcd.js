import readlineSync from 'readline-sync';
import sayHi from './cli.js';
import { genericRandomNumber } from './even.js';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  const result = NOD(y, x % y);
  return result;
}

export default function runGCDGame() {
  const name = sayHi();
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  const messageForWin = `Congratulations, ${name}!`;
  do {
    const firstNumber = genericRandomNumber(100);
    const secondNumber = genericRandomNumber(100);
    const nodFunction = NOD(firstNumber, secondNumber);
    const question = readlineSync.question(`Question: ${firstNumber} ${secondNumber}\nYour answer: `);
    if (!Number(question)) {
      console.log('Допустим только числовой ввод');
      break;
    } else if (+question === nodFunction) {
      console.log('Correct!');
    } else if (+question !== nodFunction) {
      console.log(`${question} is wrong answer ;(. Correct answer was ${nodFunction}\nLet's try again, ${name}!`);
      break;
    }
    count += 1;
  } while (count < 3);
  if (count === 3) {
    console.log(messageForWin);
  }
}