import { getRandInt } from '../utils.js';
import engine, { roundCount } from '../engine.js';

const questionString = 'What is the result of the expression?';

// Получение случайного математического оператора

const getRandOperator = () => {
  const arrayOperator = ['+', '-', '*'];
  const randOperatorIndex = getRandInt(0, 2);
  return arrayOperator[randOperatorIndex];
};

// Вычисление арифметического выражения, в зависимости от пришедшего оператора

const calculatedMathResult = (oper1, oper2, operator) => {
  switch (operator) {
    case '+':
      return oper1 + oper2;
    case '-':
      return oper1 - oper2;
    case '*':
      return oper1 * oper2;
    default:
      return 'some problem';
  }
};

const generateRound = () => {
  const firstOper = getRandInt(1, 100);
  const secondOper = getRandInt(1, 100);
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
