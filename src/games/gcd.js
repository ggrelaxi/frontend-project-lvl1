import { getRandomNumber } from '../utils.js';
import engine, { roundCount } from '../engine.js';

const questionString = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return calculateGcd(num2 % num1, num1);
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const correctAnswer = String(calculateGcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, correctAnswer];
};

const game = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds[i] = generateRound();
  }
  return rounds;
};

const brainGcd = () => engine(game(), questionString);

export default brainGcd;
