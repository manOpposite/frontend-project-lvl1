import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count < 3) {
    const number = getRandomInRange(0, 100);
    console.log(`Question: ${number}`);
    const userAnswer = (readlineSync.question('Answer: '));
    const correctAnswer = isEven(number) ? 'yes' : 'no';
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

export default brainEven;