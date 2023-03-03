import readlineSync from 'readline-sync';
import {
  sayHi, showMessageForLose, showMessageForWinner, showDescription,
  genericRandomNumber,
} from '../index.js';

function generateProgression(length) {
  const arrOfNumbers = [];
  const randomStep = genericRandomNumber(10);
  for (let index = genericRandomNumber(100); arrOfNumbers.length < length; index += randomStep) {
    arrOfNumbers.push(index);
  }
  return arrOfNumbers;
}

export default function runProgressionGame() {
  const name = sayHi();
  const description = 'What number is missing in the progression?';
  const roundForWin = 3;
  let count = 0;
  showDescription(description);
  do {
    const progression = generateProgression(10);
    const randomStep = genericRandomNumber(10);
    const trueAnswer = progression[randomStep];
    progression[randomStep] = '..';
    const answerOfUser = readlineSync.question(`Question: ${progression.join(' ')}\nYour answer: `);
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
