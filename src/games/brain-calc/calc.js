import getRandomInRange from '../../utils/getRandomInRange.js';
import startGame from '../../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calc = (firstNumber, secondNumber, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      throw new Error('unsupported operator');
  }
  return result;
};

const getData = () => {
  const firstNumber = getRandomInRange(0, 100);
  const secondNumber = getRandomInRange(0, 100);
  const randomOperator = operators[getRandomInRange(0, operators.length - 1)];
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = String(calc(firstNumber, secondNumber, randomOperator));
  return [question, correctAnswer];
};

const startCalcGame = () => startGame(description, getData);

export default startCalcGame;
