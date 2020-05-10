import * as engine from '../engine.js';

const brainProgression = () => {
  engine.greeting();
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i <= 2) {
    const randomProgression = engine.progress();
    const resultProgression = engine.hideIndexProgress(randomProgression);
    const resultProgressionString = resultProgression[1];
    const correctAnswer = resultProgression[0];
    const userAnswer = Number(engine.readlineSync.question(`Question: ${resultProgressionString}\nYou answer: `));
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${engine.userName}!`);
    }
  }
  return engine.victoryMessage();
};

export default brainProgression;
