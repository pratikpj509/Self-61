// Calculator Component
function Calculator({ num1, num2, operation }) {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => b !== 0 ? a / b : 'Cannot divide by zero';

  if (operation) {
    let result;
    switch (operation) {
      case 'addition':
        result = add(num1, num2);
        break;
      case 'subtraction':
        result = subtract(num1, num2);
        break;
      case 'multiplication':
        result = multiply(num1, num2);
        break;
      case 'division':
        result = divide(num1, num2);
        break;
      default:
        result = 'Invalid operation';
    }
    return (
      <div>
        <h3>Calculator Component</h3>
        <p>{operation}: {result}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Calculator Component</h3>
        <p>Addition: {add(num1, num2)}</p>
        <p>Subtraction: {subtract(num1, num2)}</p>
        <p>Multiplication: {multiply(num1, num2)}</p>
        <p>Division: {divide(num1, num2)}</p>
      </div>
    );
  }
}
export default Calculator;
