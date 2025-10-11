import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Factorial from './factorial';
import Calculator from './calculator';
import TextTransform from './TextTransform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      {/* <Factorial number={5} />
      <Calculator num1={10} num2={5} />
      <Calculator num1={10} num2={5} operation="addition" /> */}
      {/* <TextTransform /> */}
      <App></App>
    </div>
);

