import getRandomInRange from '../../utils/getRandomInRange.js';
import startGame from '../../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, length) => {
  const arr = [];
  let count = 0;
  while (count < length) {
    const number = firstNumber + count * step;
    count += 1;
    arr.push(number);
  }
  return arr;
};

const getData = () => {
  const firstNumber = getRandomInRange(0, 20);
  const step = getRandomInRange(1, 10);
  const length = getRandomInRange(5, 15);
  const progression = getProgression(firstNumber, step, length);
  const hiddenNumber = Math.floor(Math.random() * progression.length);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
};

const startProgressionGame = () => startGame(description, getData);

export default startProgressionGame;
