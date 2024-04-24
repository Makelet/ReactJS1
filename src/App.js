import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let [value, setValue] = useState(0);


  return (
    <div className="App">
      <h1>
        This is a Number
        {value}
      </h1>
      <button onClick={() => { setValue(value + 1) }}>Click me</button>
    </div>
  );
}

export default App;
