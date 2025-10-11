import React, { useState } from 'react';
//  1) Create Function Component  with parameters
//      	 a) Factorial ==  pass number as parameter 
//                   b) Calculator ==  pass 2 numbers as attribute 
//                         and display 

// 		addition , subtraction , division , multiplication 
// 	c) in point b  =  accept 1 more argument operation and then 
//                      display data for that operation only 

// in above assignments display output On Html Page 

// use state management 
// Factorial Component
function Factorial({ number }) {
  const calculateFactorial = (n) => {
    if (n < 0) return 'Undefined';
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  return (
    <div>
      <p>Factorial of {number} is: {calculateFactorial(number)}</p>
    </div>
  );
}

// Calculator Component
function Calculator({ num1, num2, operation }) {
  const calculate = () => {
    switch (operation) {
      case 'addition':
        return num1 + num2;
      case 'subtraction':
        return num1 - num2;
      case 'multiplication':
        return num1 * num2;
      case 'division':
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
      default:
        return `
          Addition: ${num1 + num2}, 
          Subtraction: ${num1 - num2}, 
          Multiplication: ${num1 * num2}, 
          Division: ${num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'}
        `;
    }
  };

  return (
    <div>
      <p>Result: {calculate()}</p>
    </div>
  );
}

// Main Component
function FactCal() {
  let [factNum, setFactNum] = useState(5);
  const [calcNum1, setCalcNum1] = useState(10);
  const [calcNum2, setCalcNum2] = useState(5);
  const [calcOp, setCalcOp] = useState('');

  return (
    <div>
      <h2>Factorial</h2>
      <input
        type="number"
        value={factNum}
        onChange={(e) => setFactNum(e.target.value)}
      />
      <Factorial number={parseInt(factNum)} />

      <h2>Calculator</h2>
      <input
        type="number"
        value={calcNum1}
        onChange={(e) => setCalcNum1(e.target.value)}
      />
      <input
        type="number"
        value={calcNum2}
        onChange={(e) => setCalcNum2(e.target.value)}
      />
      <select value={calcOp} onChange={(e) => setCalcOp(e.target.value)}>
        <option value="">All</option>
        <option value="addition">Addition</option>
        <option value="subtraction">Subtraction</option>
        <option value="multiplication">Multiplication</option>
        <option value="division">Division</option>
      </select>
      <Calculator
        num1={parseFloat(calcNum1)}
        num2={parseFloat(calcNum2)}
        operation={calcOp}
      />
    </div>
  );
}

export default FactCal;
