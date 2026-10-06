import React, { useState } from 'react';
import './App.css';

function CalculatorDisplay({ displayValue }) {
  return (
    <div className='CalculatorDisplay'>
      {displayValue}
    </div>
  );
}

function CalculatorButton({ label, className = "CalculatorButton", onClick }) {
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState('0');

  const handleButtonClick = (value) => {
    setDisp(value);
  };

  const getButtonClass = (label) => {
    if (label === 'CLR') return 'CalculatorButton ClearButton';
    if (label === '=') return 'CalculatorButton EqualsButton';
    if (['+', '-', 'x', '÷'].includes(label)) return 'CalculatorButton OperatorButton';
    return 'CalculatorButton';
  };

  const buttons = [
    '7', '8', '9', '÷',
    '4', '5', '6', 'x',
    '1', '2', '3', '-',
    'CLR', '0', '=', '+'
  ];

  return (
    <div className='App'>
      <div className='Header'>Calculator of Gin Hanner Tayag - DA3A</div>

      <div className='Calculator'>
        <CalculatorDisplay displayValue={disp} />
        <div className='CalculatorGrid'>
          {buttons.map((btn) => (
            <CalculatorButton
              key={btn}
              label={btn}
              className={getButtonClass(btn)}
              onClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;