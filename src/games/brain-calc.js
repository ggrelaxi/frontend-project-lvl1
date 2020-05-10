import * as engine from '../engine.js';

const brainCalc = () => {
  engine.greeting();
  console.log('What is the result of the expression?');
  let i = 0;
  while (i <= 2) {
    const firstOper = engine.GetRandInt();
    const secondOper = engine.GetRandInt();
    const operator = engine.GetRandOperator();
    const expression = `${firstOper} ${operator} ${secondOper}`;
    const correctResult = engine.CalculatedMathResult(firstOper, operator, secondOper);
    const userAnswer = Number(engine.readlineSync.question(`Question: ${expression}\nYou answer: `));
    if (userAnswer === correctResult) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctResult}".\nLet's try again, ${engine.userName}!`);
    }
  }
  return engine.victoryMessage();
};

export default brainCalc;
