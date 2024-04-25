import logo from './logo.svg';
import { useState,useEffect } from 'react';
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

  // useEffect(() => {
  //   alert("Run on Every Render");
  // })
  // useEffect(() => {
  //   alert("Run on Only First Render");
  // }, []);
  // useEffect(() => {
  //   alert("Count was changed");
  //   setColor(color + 1);
  // }, [count]);
  // useEffect(() => {
  //   alert("Color was changed");
  // }, [color]);

  return (
    <>
      <NavBar />
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Click Me</button>
      <main className="cards">
        <Card title="Project1" desc="Desc1" image={bg1} />
        <Card title="Project2" desc="Desc2" image={bg2} />
        <Card title="Project3" desc="Desc3" image={bg3} />
        <Card title="Project4" desc="Desc4" image={bg4} />
      </main>
      <Footer />
    </>
  );
}

