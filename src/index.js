import readlineSync from 'readline-sync';

const game = (description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let count = 0;
  while (count < 3) {
    let question;
    let correctAnswer;
    console.log(`Question: ${question}`);
    const userAnswer = (readlineSync.question('Your answer: '));
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

export default game;
