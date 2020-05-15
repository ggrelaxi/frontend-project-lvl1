import { getRandomNumber } from '../utils.js';
import engine, { roundCount } from '../engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomNumber);
  return [randomNumber, correctAnswer];
};

const runEvenGame = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(rounds, description);
};

export default runEvenGame;
