import getRandomInRange from '../utils/getRandomInRange.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(0, 100);
  const secondNumber = getRandomInRange(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const startGcdGame = () => startGame(description, generateRound);

export default startGcdGame;
