import * as func from '../func.js';
import engine from '../engine.js';

const generateRound = () => {
  const firstOper = func.GetRandInt();
  const secondOper = func.GetRandInt();
  const operator = func.GetRandOperator();
  const expression = `${firstOper} ${operator} ${secondOper}`;
  const correctAnswer = String(func.CalculatedMathResult(firstOper, operator, secondOper));
  return [expression, correctAnswer];
};

const questionString = 'What is the result of the expression?';

const game = () => [generateRound(), generateRound(), generateRound()];

const brainCalc = () => engine(game(), questionString);

export default brainCalc;
