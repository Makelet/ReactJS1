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

  let btnRef = useRef(null);


  let handleCount = () => {
    setCount(
      count + 2
    )
    btnRef.current.style.fontSize = "10px";
  }

  // let n1 = 0; 
  // const n1 = useRef(0);

  useEffect(() => {
    // btnRef.current.style.backgroundColor = "red"
    // n1.current = n1.current + 1;
    // console.log(`The value of n1 is ${n1.current}`);
    // console.log(btnRef);
    // alert("every time");
  });


  let handleBg = () => {
    btnRef.current.style.fontSize = "50px";
  }

  let showBtnRef = useRef(null);


  let [showbtn, setShowBtn] = useState(false);
  let [todos, setTodos] = useState([
    {
      id: 1,
      title: "title1",
      desc: "desc1"
    },
    {
      id: 2,
      title: "title2",
      desc: "desc2"
    },
    {
      id: 3,
      title: "title3",
      desc: "desc3"
    }
  ]);

  let Todo = ({todo})=>{
    return (
      <>
      <div className="box">
          <h4>Id : {todo.id}</h4>
          <h1>Title : {todo.title}</h1>
          <p>Desc : {todo.desc}</p>
        </div>
      </>
    )
  }

  return (
    <>
      <NavBar />
      <h1>{count}</h1>
      <button ref={btnRef} onClick={handleCount}>Click Me</button>
      {/* <button ref={btnRef} onClick={() => { setCount(count + 1) }}>Click Me</button> */}
      <main className="cards">
        <Card title="Project1" desc="Desc1" image={bg1} />
        <Card title="Project2" desc="Desc2" image={bg2} />
        <Card title="Project3" desc="Desc3" image={bg3} />
        <Card title="Project4" desc="Desc4" image={bg4} />
      </main>

      {/* <button onClick={handleBg}>Change Color</button> */}

      <button onClick={() => { setShowBtn(!showbtn) }}>Toggle showbtn</button>
      {/* <button onClick={()=>{setShowBtn(!showbtn)}}>Change Color</button> */}
      {/* {showbtn && <button>Button is Visible</button>} */}
      {showbtn ? <button>Button is True</button> : <button>Button is False</button>}
      {/* <button onClick={ handleBg }>Change Color</button> */}
      {/* <button onClick={()=>{btnRef.current.style.backgroundColor="green"}}>Change Color</button> */}

      {/* { todos.map((todo)=>{
        return (<div key ={todo.id} className="box">
          <h4>Id : {todo.id}</h4>
          <h1>Title : {todo.title}</h1>
          <p>Desc : {todo.desc}</p>
        </div>)
      })} */}

      {todos.map((todo)=>{
        console.log(todo);
        return <Todo key={todo.id} todo={todo}/>
      })}
      <Footer />
    </>
  );
}

export default App;
