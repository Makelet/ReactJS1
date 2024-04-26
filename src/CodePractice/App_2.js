import logo from './logo.svg';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';

import bg1 from './bg1.png';
import bg2 from './bg2.jpg';
import bg3 from './bg3.jpg';
import bg4 from './bg4.jpg';

function App() {

  let [count, setCount] = useState(0);

  let [color, setColor] = useState(0);

  // let n1 = 0; 
  // const n1 = useRef(0);
  const btnRef = useRef(null);

  useEffect(() => {
    btnRef.current.style.backgroundColor = "red"
    // n1.current = n1.current + 1;
    // console.log(`The value of n1 is ${n1.current}`);
    console.log(btnRef);
  });

  return (
    <>
      <NavBar />
      <h1>{count}</h1>
      <button ref={btnRef} onClick={() => { setCount(count + 1) }}>Click Me</button>
      <main className="cards">
        <Card title="Project1" desc="Desc1" image={bg1} />
        <Card title="Project2" desc="Desc2" image={bg2} />
        <Card title="Project3" desc="Desc3" image={bg3} />
        <Card title="Project4" desc="Desc4" image={bg4} />
      </main>

      <button onClick={()=>{btnRef.current.style.backgroundColor="green"}}>Change Color</button>
      {/* <button onClick={()=>{btnRef.current.style.backgroundColor="green"}}>Change Color</button> */}
      <Footer />
    </>
  );
}

export default App;
