import getRandInt from '../utils.js';
import engine from '../engine.js';

const questionString = 'What number is missing in the progression?';

// Формирование случайно арифметической прогрессии

const progress = () => {
  const progStep = getRandInt(1, 100);
  let firstElement = getRandInt(1, 1000);
  let i = 1;
  const resultProgress = [];
  while (i <= 10) {
    resultProgress.push(firstElement);
    firstElement += progStep;
    i += 1;
  }
  return resultProgress;
};

// Вывод прогрессии со скрытым элементом

const hideIndexProgress = (arr) => {
  const progressArray = arr;
  const hideIndex = getRandInt(0, 9);
  const correctAnswer = progressArray[hideIndex];
  progressArray[hideIndex] = '..';
  const resultStringProgress = progressArray.join(' ');
  return [correctAnswer, resultStringProgress];
};

const generateRound = () => {
  const randomProgression = progress();
  const resultProgression = hideIndexProgress(randomProgression);
  const correctAnswer = String(resultProgression[0]);
  const question = resultProgression[1];
  return [question, correctAnswer];
};

const game = () => {
  const rounds = [];
  for (let i = 0; i <= 2; i += 1) {
    rounds[i] = generateRound();
  }
  return rounds;
};

const brainProgression = () => engine(game(), questionString);

export default brainProgression;
