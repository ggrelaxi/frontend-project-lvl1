import GetRandInt from '../utils.js';
import engine from '../engine.js';

// Вычисление НОД

const calculateGcd = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

const generateRound = () => {
  const firstInt = GetRandInt(1, 100);
  const secondInt = GetRandInt(1, 100);
  const gcd = String(calculateGcd(firstInt, secondInt));
  const question = `${firstInt} ${secondInt}`;
  return [question, gcd];
};

const questionString = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const rounds = [];
  for (let i = 0; i <= 2; i += 1) {
    rounds[i] = generateRound();
  }
  return rounds;
};

const brainGcd = () => engine(game(), questionString);

export default brainGcd;
