import { getRandomNumber } from '../utils.js';
import engine, { roundCount } from '../engine.js';

const description = 'What is the result of the expression?';

const getRandOperator = () => {
  const arrayOperator = ['+', '-', '*'];
  const randOperatorIndex = getRandomNumber(0, arrayOperator.lenght - 1);
  return arrayOperator[randOperatorIndex];
};

const calculate = (operator, operand1, operand2) => {
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
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const operator = getRandOperator();
  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calculate(firstOperand, secondOperand, operator));
  return [expression, correctAnswer];
};

const runCalcGame = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(rounds, description);
};

export default runCalcGame;
