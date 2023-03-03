import {
  sayHi, showDescription, showMessageForLose, showMessageForWinner,
  genericRandomNumber, askQuestion, checkingAnswer,
} from '../index.js';

function findingPrimeNumber(number) {
  const answerYes = 'yes';
  const answerNo = 'no';
  if (number > 1) {
    for (let index = 2; index < number; index += 1) {
      if (number % index === 0) {
        return answerNo;
      }
    }
    return answerYes;
  }
  return answerYes;
}

export default function runPrimeGame() {
  const name = sayHi();
  const roundForWin = 3;
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  showDescription(description);
  let count = 0;

  do {
    const randomNumber = genericRandomNumber(100);
    const answerOfUser = askQuestion(randomNumber);
    const trueAnswer = findingPrimeNumber(randomNumber);
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
