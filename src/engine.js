import readlineSync from 'readline-sync';

const engine = (arr, str) => {
  console.log(arr);
  const questionString = str;
  const userName = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
  console.log(questionString);
  let i = 0;
  while (i <= 2) {
    const [question, answer] = arr[i];
    const userAnswer = readlineSync.question(`Question: ${question}\nYou answer: `);
    console.log(userAnswer);
    if (userAnswer === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

export default engine;
