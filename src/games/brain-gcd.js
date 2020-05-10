import * as engine from '../engine.js';

const brainGcd = () => {
  engine.greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i <= 2) {
    const firstInt = engine.GetRandInt();
    const secondInt = engine.GetRandInt();
    const gcd = engine.calculateGcd(firstInt, secondInt);
    const userAnswer = Number(engine.readlineSync.question(`Question: ${firstInt} ${secondInt} \nYou answer: `));
    if (userAnswer === gcd) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gcd}".\n${engine.badAnswer}`);
    }
  }
  return engine.victoryMessage();
};

export default brainGcd;
