import React from 'react';

import './App.css';

import Steps from './components/Steps';
import Step from './components/Step';

const App = () => {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="App">
      <Steps>
        {
          arr.map(item => (
            <Step key={item}>
              {item}
            </Step>
          ))
        }
      </Steps>
    </div>
  );
}

export default App;