import * as func from '../func.js';
import engine from '../engine.js';

const generateRound = () => {
  const firstInt = func.GetRandInt();
  const secondInt = func.GetRandInt();
  const gcd = String(func.calculateGcd(firstInt, secondInt));
  const question = `${firstInt} ${secondInt}`;
  return [question, gcd];
};

const questionString = 'Find the greatest common divisor of given numbers.';

const game = () => [generateRound(), generateRound(), generateRound()];

const brainGcd = () => engine(game(), questionString);

export default brainGcd;
