import getRandomInRange from '../../utils/getRandomInRange.js';
import startGame from '../../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

const getData = () => {
  const question = getRandomInRange(0, 100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const startEvenGame = () => startGame(description, getData);

export default startEvenGame;
