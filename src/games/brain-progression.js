import { getRandInt } from '../utils.js';
import engine, { roundCount } from '../engine.js';

const questionString = 'What number is missing in the progression?';

// Формирование случайно арифметической прогрессии

const generateRound = () => {
  const progStep = getRandInt(1, 100);
  let firstElement = getRandInt(1, 1000);
  let i = 1;
  const resultProgression = [];
  while (i <= 10) {
    resultProgression.push(firstElement);
    firstElement += progStep;
    i += 1;
  }
  const hideIndex = getRandInt(0, 9);
  const correctAnswer = String(resultProgression[hideIndex]);
  resultProgression[hideIndex] = '..';
  const question = resultProgression.join(' ');
  return [question, correctAnswer];
};

const game = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds[i] = generateRound();
  }
  return rounds;
};

const brainProgression = () => engine(game(), questionString);

export default brainProgression;
