import getRandomNumber from '../utils.js';
import game from '../index.js';

const getResultExpression = (operand1, operand2, symbol) => {
  switch (symbol) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operand: '${symbol}'!`);
  }
};

const rules = 'What is the result of the expression?';
const runBrainCalc = () => {
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const symbols = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, symbols.length - 1);
  const symbol = symbols[randomIndex];
  const question = `${operand1} ${symbol} ${operand2}`;
  const correctAnswer = getResultExpression(operand1, operand2, symbol);
  return [question, String(correctAnswer)];
};

export default () => game(runBrainCalc, rules);
