import readlineSync from 'readline-sync';
import getRandomInRange from '../../utils/getRandomInRange.js';

const isPrimeNumber = (num) => {
  let count = 0;
  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }
  return count === 0 ? 'yes' : 'no';
};

const brainPrime = () => {
  console.log('Welcome to the Brains Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let count = 0;
  while (count < 3) {
    const number = getRandomInRange(0, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('You answer: ');
    const correctAnswer = isPrimeNumber(number);
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      count = 3;
    } else {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        console.log(`Congratulation, ${userName}!`);
      }
    }
  }
};

export default brainPrime;
