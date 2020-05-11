import GetRandInt from '../utils.js';
import engine from '../engine.js';

// Проверка числа на четность

const numberIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const randomInt = GetRandInt(1, 100);
  const correctAnswer = numberIsEven(randomInt);
  return [randomInt, correctAnswer];
};

const questionString = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const rounds = [];
  for (let i = 0; i <= 2; i += 1) {
    rounds[i] = generateRound();
  }
  return rounds;
};

const brainEven = () => engine(game(), questionString);

export default brainEven;
