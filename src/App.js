import { useState } from 'react';
import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Hello World!! This is gamarei</h1>
      <h1>Counter</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1 )}>-</button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1 )}>+</button>

    </div>
  );
}

export default App;
