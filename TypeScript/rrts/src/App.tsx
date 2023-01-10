import React, { useState } from 'react';

interface AppProps {
  color: string;
}

interface Counter {
  counter: number;
  setCounter: number;
}

function App(props: AppProps) {
  const [counter, setCounter] = useState<number>(0);

  const increment = (): void => {
    setCounter(counter + 1);
  };

  const decrement = (): void => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className='App'>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      {counter}
    </div>
  );
}

export default App;
