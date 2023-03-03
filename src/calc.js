import readlineSync from 'readline-sync';
import {
  sayHi, genericRandomNumber, showMessageForLose, showMessageForWinner,
  showDescription,
} from '../index.js';

function calulateCorrectAnswer(operand1, operand2, operator) {
  switch (operator[0]) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
}

export default function runCalcGame() {
  const name = sayHi();
  const description = 'What is the result of the expression?';
  showDescription(description);
  let count = 0;
  const roundForWin = 3;
  const operator = ['+', '-', '*'];
  do {
    const operand1 = genericRandomNumber(10);
    const operand2 = genericRandomNumber(10);
    const answerOfUser = readlineSync.question(`Question: ${operand1} ${operator[count]} ${operand2}\nYour answer: `);
    const trueAnswer = calulateCorrectAnswer(operand1, operand2, operator[count]);
    if (Number(answerOfUser) === trueAnswer) {
      console.log('Correct!');
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
