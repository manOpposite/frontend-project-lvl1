import getRandomInRange from '../utils/getRandomInRange.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    const number = firstNumber + i * step;
    arr.push(number);
  }
  return arr;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(0, 20);
  const step = getRandomInRange(1, 10);
  const length = getRandomInRange(5, 15);
  const progression = getProgression(firstNumber, step, length);
  const hiddenNumber = getRandomInRange(0, length - 1);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
};

const startProgressionGame = () => startGame(description, generateRound);

export default startProgressionGame;
