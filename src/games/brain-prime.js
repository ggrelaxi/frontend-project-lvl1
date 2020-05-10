import * as engine from '../engine.js';

const brainPrime = () => {
  engine.greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i <= 2) {
    const actualNumber = engine.GetRandInt();
    const correctAnswer = engine.NumberIsSimple(actualNumber);
    const userAnswer = engine.readlineSync.question(`Question: ${actualNumber}\nYou answer: `);
    if ((userAnswer === 'yes' && correctAnswer === true) || (userAnswer === 'no' && correctAnswer === false)) {
      console.log('Correct!');
      i += 1;
    } else if (userAnswer === 'yes' && correctAnswer === false) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${engine.userName}!`);
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${engine.userName}!`);
    }
  }
  return engine.victoryMessage();
};

export default brainPrime;
