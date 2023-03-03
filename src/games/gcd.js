import readlineSync from 'readline-sync';
import {
  sayHi, genericRandomNumber, showMessageForLose, showMessageForWinner, showDescription,

} from '../index.js';

function checkingNODE(x, y) {
  if (y > x) return checkingNODE(y, x);
  if (!y) return x;
  const result = checkingNODE(y, x % y);
  return result;
}

export default function runGCDGame() {
  const name = sayHi();
  const description = 'Find the greatest common divisor of given numbers.';
  const roundForWin = 3;
  showDescription(description);
  let count = 0;

  do {
    const firstNumber = genericRandomNumber(10);
    const secondNumber = genericRandomNumber(10);
    const trueAnswer = checkingNODE(firstNumber, secondNumber);
    const answerOfUser = readlineSync.question(`Question: ${firstNumber} ${secondNumber}\nYour answer: `);
    if (Number(answerOfUser) === trueAnswer) {
      console.log('Correct');
    } else if (Number(answerOfUser) !== trueAnswer) {
      showMessageForLose(answerOfUser, trueAnswer, name);
      break;
    }
    count += 1;
  } while (count < roundForWin);
  if (count === roundForWin) {
    showMessageForWinner(name);
  }
}
