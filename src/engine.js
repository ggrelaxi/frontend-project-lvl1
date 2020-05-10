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
