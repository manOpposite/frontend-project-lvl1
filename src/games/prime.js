import getRandomInRange from '../utils/getRandomInRange.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  let count = 0;
  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }
  return count === 0;
};

const generateRound = () => {
  const question = getRandomInRange(0, 100);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => startGame(description, generateRound);

export default startPrimeGame;
