import readlineSync from "readline-sync";

export default function sayHi() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  const hiName = `Hello, ${name}!`;
  console.log(hiName);
  return name;
}
