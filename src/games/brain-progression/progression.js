import readlineSync from 'readline-sync';
import getRandomInRange from '../../utils/getRandomInRange.js';

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

const brainProgression = () => {
  console.log('Welcome to the Brains Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let count = 0;
  while (count < 3) {
    const firstNumber = getRandomInRange(0, 20);
    const step = getRandomInRange(1, 10);
    const length = getRandomInRange(5, 15);
    const progression = getProgression(firstNumber, step, length);
    const hiddenNumber = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[hiddenNumber];
    progression[hiddenNumber] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      count = 3;
    } else {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};

export default brainProgression;
