import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
};

export default greeting;

const GetRandInt = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const brainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  const victoryMessage = `Congratulations, ${userName}`;
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i <= 2) { // выполняем проверку 3 ответов
    const randomInt = GetRandInt(); // получаем рандомное число для проверки
    const even = randomInt % 2 === 0; // заводим переменную для проверки ответа
    const userAnswer = readlineSync.question(`Question: ${randomInt}\nYou answer: `);
    if (userAnswer === 'yes' && even === true) { // число четное - пользователь ответил верно
      console.log('Correct!');
      i += 1;
    } else if (userAnswer === 'no' && even === false) { // число нечетное - пользователь ответил верно
      console.log('Correct!');
      i += 1;
    } else if (userAnswer === 'yes' && even === false) { // число нечетное - пользователь дал неверный отвел
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
    } else { // число четное - пользователь дал неверный отвел
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
    }
  }
  return console.log(victoryMessage); // пользователь ответил 3 раза правильно
};
