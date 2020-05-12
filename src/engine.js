import readlineSync from 'readline-sync';

// Конфигурационный настройки

export const roundCount = 3; // количество раундов

const engine = (rounds, description) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = rounds[i];
    const userAnswer = readlineSync.question(`Question: ${question}\nYou answer: `);
    console.log(userAnswer);
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default engine;
