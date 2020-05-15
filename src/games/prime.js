import { getRandomNumber } from '../utils.js';
import engine, { roundCount } from '../engine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const actualNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(actualNumber) === true ? 'yes' : 'no';
  return [actualNumber, correctAnswer];
};

const runPrimeGame = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(rounds, description);
};

export default runPrimeGame;
