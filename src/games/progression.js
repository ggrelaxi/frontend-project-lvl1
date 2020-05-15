import { getRandomNumber } from '../utils.js';
import engine, { roundCount } from '../engine.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const progressionLength = 11;
  const step = getRandomNumber(1, 100);
  const resultProgression = [];
  const startNum = getRandomNumber(1, 1000);
  for (let i = 1; i < progressionLength; i += 1) {
    resultProgression.push(startNum + i * step);
  }
  const hideIndex = getRandomNumber(0, 9);
  const correctAnswer = String(resultProgression[hideIndex]);
  resultProgression[hideIndex] = '..';
  const question = resultProgression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(rounds, description);
};

export default runProgressionGame;
