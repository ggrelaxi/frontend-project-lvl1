import * as engine from '../engine.js';

const brainEven = () => {
  engine.greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i <= 2) { // выполняем проверку 3 ответов
    const randomInt = engine.GetRandInt(); // получаем рандомное число для проверки
    const even = randomInt % 2 === 0; // заводим переменную для проверки ответа
    const userAnswer = engine.readlineSync.question(`Question: ${randomInt}\nYou answer: `);
    if (userAnswer === 'yes' && even === true) { // число четное - пользователь ответил верно
      console.log('Correct!');
      i += 1;
    } else if (userAnswer === 'no' && even === false) { // число нечетное - пользователь ответил верно
      console.log('Correct!');
      i += 1;
    } else if (userAnswer === 'yes' && even === false) { // число нечетное - пользователь дал неверный отвел
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${engine.userName}!`);
    } else { // число четное - пользователь дал неверный отвел
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "yes".\n${engine.badAnswer}`);
    }
  }
  return engine.victoryMessage(); // пользователь ответил 3 раза правильно
};

export default brainEven;
