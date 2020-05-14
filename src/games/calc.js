import { getRandomNumber } from '../utils.js';
import engine, { roundCount } from '../engine.js';

const questionString = 'What is the result of the expression?';

const getRandOperator = () => {
  const arrayOperator = ['+', '-', '*'];
  const randOperatorIndex = getRandomNumber(0, arrayOperator.lenght - 1);
  return arrayOperator[randOperatorIndex];
};

const calculatedMathResult = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return 'some problem';
  }
};

const generateRound = () => {
  const firstOper = getRandomNumber(1, 100);
  const secondOper = getRandomNumber(1, 100);
  const operator = getRandOperator();
  const expression = `${firstOper} ${operator} ${secondOper}`;
  const correctAnswer = String(calculatedMathResult(firstOper, secondOper, operator));
  return [expression, correctAnswer];
};

const game = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds[i] = generateRound();
  }
  return rounds;
};

const brainCalc = () => engine(game(), questionString);

export default brainCalc;
