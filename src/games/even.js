import {
  sayHi, genericRandomNumber, showMessageForLose, showMessageForWinner,
  showDescription, askQuestion, checkingAnswer,
} from './index.js';

function checkingEvenNumber(randomNumber) {
  if (randomNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export default function runEvenGame() {
  const name = sayHi();
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  showDescription(description);
  let count = 0;
  const roundForWin = 3;

  do {
    const randomNumber = genericRandomNumber(100);
    const answerOfUser = askQuestion(randomNumber);
    const trueAnswer = checkingEvenNumber(randomNumber);
    const checking = checkingAnswer(trueAnswer, answerOfUser);
    if (checking === false) {
      showMessageForLose(answerOfUser, trueAnswer, name);
      break;
    }
    count += 1;
  } while (count < roundForWin);
  if (count === roundForWin) {
    showMessageForWinner(name);
  }
}
