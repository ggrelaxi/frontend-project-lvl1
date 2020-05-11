import GetRandInt from '../utils.js';
import engine from '../engine.js';

// Проверка, простое ли число

const numberIsSimple = (number) => {
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
  const actualNumber = GetRandInt(1, 100);
  const correctAnswer = numberIsSimple(actualNumber) === true ? 'yes' : 'no';
  return [actualNumber, correctAnswer];
};

const questionString = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const rounds = [];
  for (let i = 0; i <= 2; i += 1) {
    rounds[i] = generateRound();
  }
  return rounds;
};

const brainPrime = () => engine(game(), questionString);

export default brainPrime;
