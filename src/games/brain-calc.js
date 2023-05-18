import getRandomNumber from '../utils.js';
import game from '../index.js';

const minValue = 1;
const maxValue = 100;

const getResultExpression = (operand1, operand2, symbol) => {
  switch (symbol) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return 'invalid symbol';
  }
};

const rules = 'What is the result of the expression?';
const runGame = () => {
  const operand1 = getRandomNumber(minValue, maxValue);
  const operand2 = getRandomNumber(minValue, maxValue);
  const symbols = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, symbols.length - 1);
  const symbol = symbols[randomIndex];
  const question = `${operand1} ${symbol} ${operand2}`;
  const correctAnswer = getResultExpression(operand1, operand2, symbol);
  return [question, String(correctAnswer)];
};

export default () => game(runGame, rules);
