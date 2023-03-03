import readlineSync from 'readline-sync';

export function sayHi() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const hiName = `Hello, ${name}!`;
  console.log(hiName);
  return name;
}

export function genericRandomNumber(theFactor) {
  const randomNumber = Math.trunc(Math.random(1, 100) * theFactor);
  return randomNumber;
}

export function showMessageForLose(answerOfUser, trueAnswer, name) {
  console.log(`${answerOfUser} is wrong answer ;(. Correct answer was ${trueAnswer}\nLet's try again, ${name}!`);
}

export function showMessageForWinner(name) {
  console.log(`Congratulations, ${name}!`);
}

export function showDescription(description) {
  console.log(description);
}

export function askQuestion(randomNumber) {
  const answerOfUser = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  return answerOfUser;
}

export function checkingAnswer(trueAnswer, answerOfUser) {
  if (answerOfUser === trueAnswer) {
    console.log('Correct');
  } else if (answerOfUser !== trueAnswer) {
    return false;
  }
  return null;
}
