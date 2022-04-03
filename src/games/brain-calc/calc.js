import readlineSync from 'readline-sync';
import getRandomInRange from '../../utils/getRandomInRange.js';

const calc = (firstNumber, secondNumber, char) => {
  let result;
  if (char === '+') {
    result = firstNumber + secondNumber;
  }
  if (char === '-') {
    result = firstNumber - secondNumber;
  }
  if (char === '*') {
    result = firstNumber * secondNumber;
  }
  return result;
};

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let count = 0;
  while (count < 3) {
    const chars = ['+', '-', '*'];
    const firstNumber = getRandomInRange(0, 100);
    const secondNumber = getRandomInRange(0, 100);
    const char = chars[Math.floor(Math.random() * chars.length)];
    console.log(`Question: ${firstNumber} ${char} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(calc(firstNumber, secondNumber, char));
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

export default brainCalc;
