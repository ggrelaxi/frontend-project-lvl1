import readlineSync from 'readline-sync';

export { readlineSync };

export const userName = readlineSync.question('May I have your name? ');

export const greeting = () => { // почему при вызове функции, сначала объявляется userName?
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};

export const victoryMessage = () => console.log(`Congratulations, ${userName}`);

export const badAnswer = `Let's try again, ${userName}!`;

export const GetRandInt = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const GetRandOperator = () => {
  const arrayOperator = ['+', '-', '*'];
  const randOperator = Math.floor(Math.random() * arrayOperator.length);
  return arrayOperator[randOperator];
};

export const CalculatedMathResult = (oper1, operator, oper2) => {
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

export const calculateGcd = (num1, num2) => {
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
