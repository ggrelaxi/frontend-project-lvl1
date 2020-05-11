import GetRandInt from '../utils.js';
import engine from '../engine.js';

// Получение случайного математического оператора

const GetRandOperator = () => {
  const arrayOperator = ['+', '-', '*'];
  const randOperator = Math.floor(Math.random() * arrayOperator.length);
  return arrayOperator[randOperator];
};

// Вычисление арифметического выражения, в зависимости от пришедшего оператора

const CalculatedMathResult = (oper1, operator, oper2) => {
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
  const firstOper = GetRandInt(1, 100);
  const secondOper = GetRandInt(1, 100);
  const operator = GetRandOperator();
  const expression = `${firstOper} ${operator} ${secondOper}`;
  const correctAnswer = String(CalculatedMathResult(firstOper, operator, secondOper));
  return [expression, correctAnswer];
};

const questionString = 'What is the result of the expression?';

const game = () => {
  const rounds = [];
  for (let i = 0; i <= 2; i += 1) {
    rounds[i] = generateRound();
  }
  return rounds;
};

const brainCalc = () => engine(game(), questionString);

export default brainCalc;
