import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  const calculate = (op) => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    setOperation(op);

    if (op === 'add')      setResult(n1 + n2);
    if (op === 'sub')      setResult(n1 - n2);
    if (op === 'mul')      setResult(n1 * n2);
    if (op === 'div')      setResult(n2 !== 0 ? (n1 / n2).toFixed(2) : 'Cannot divide by zero');
  };

  const getLabel = () => {
    if (operation === 'add') return '➕ Addition';
    if (operation === 'sub') return '➖ Subtraction';
    if (operation === 'mul') return '✖️ Multiplication';
    if (operation === 'div') return '➗ Division';
    return '';
  };

  return (
    <div className="page">
      <div className="box">

        <div className="title">🧮 Calculator</div>

        <div className="row">
          <label className="label">Value One</label>
          <input
            className="input"
            type="number"
            placeholder="Enter first number"
            value={num1}
            onChange={e => setNum1(e.target.value)}
          />
        </div>

        <div className="row">
          <label className="label">Value Two</label>
          <input
            className="input"
            type="number"
            placeholder="Enter second number"
            value={num2}
            onChange={e => setNum2(e.target.value)}
          />
        </div>

        <div className="btn-row">
          <button className="btn btn-add" onClick={() => calculate('add')}>➕ Add</button>
          <button className="btn btn-sub" onClick={() => calculate('sub')}>➖ Sub</button>
          <button className="btn btn-mul" onClick={() => calculate('mul')}>✖️ Mul</button>
          <button className="btn btn-div" onClick={() => calculate('div')}>➗ Div</button>
        </div>

        {result !== null && (
          <div className="result">
            <span className="result-label">{getLabel()}</span>
            <span className="result-value">= {result}</span>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;