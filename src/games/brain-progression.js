import * as func from '../func.js';
import engine from '../engine.js';

const generateRound = () => {
  const randomProgression = func.progress();
  const resultProgression = func.hideIndexProgress(randomProgression);
  const correctAnswer = String(resultProgression[0]);
  const question = resultProgression[1];
  return [question, correctAnswer];
};

const questionString = 'What number is missing in the progression?';

const game = () => [generateRound(), generateRound(), generateRound()];

const brainProgression = () => engine(game(), questionString);

export default brainProgression;
