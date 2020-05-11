import * as func from '../func.js';
import engine from '../engine.js';

const generateRound = () => {
  const actualNumber = func.GetRandInt();
  const correctAnswer = func.numberIsSimple(actualNumber) === true ? 'yes' : 'no';
  return [actualNumber, correctAnswer];
};

const questionString = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => [generateRound(), generateRound(), generateRound()];

const brainPrime = () => engine(game(), questionString);

export default brainPrime;
