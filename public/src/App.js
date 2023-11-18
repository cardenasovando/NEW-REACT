import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
   
    <div className="App" onClick={() => setCounter(counter +1)}>
      {counter}
    </div>

    
  );
}

export default App;
