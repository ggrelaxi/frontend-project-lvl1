import * as func from '../func.js';
import engine from '../engine.js';

const generateRound = () => {
  const randomInt = func.GetRandInt();
  const correctAnswer = func.numberIsEven(randomInt);
  return [randomInt, correctAnswer];
};

const questionString = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => [generateRound(), generateRound(), generateRound()];

const brainEven = () => engine(game(), questionString);

export default brainEven;
