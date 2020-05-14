import { getRandomNumber } from '../utils.js';
import engine, { roundCount } from '../engine.js';

const questionString = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const randomInt = getRandomNumber(1, 100);
  const correctAnswer = isNumberEven(randomInt);
  return [randomInt, correctAnswer];
};

const game = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds[i] = generateRound();
  }
  return rounds;
};

const brainEven = () => engine(game(), questionString);

export default brainEven;
