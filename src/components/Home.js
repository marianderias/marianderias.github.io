import React from 'react';
import {useState, useEffect} from 'react';
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import TypeWriter from './TypeWriter';
import TaskBar from "./TaskBar";

const Home = () => {
  // These are the strings I'm using for the type writing in the middle of the screen, which can be changed
  const[typed, setTyped] = useState(["Programmer","Web developer", "Student", "Your new employee"]);
  const [cursorPos, setCursorPos] = useState({x:0, y:0});

  // Check runs all the time to reset cursor position and add new message to 'typed' variables'
  useEffect(() => {
    const mousemove = (e) =>{
      setCursorPos({x: e.clientX, y: e.clientY});
    }
    const mouseclick = () =>{
      if (!typed.includes("These are absolutely my hands and my setup")){
        setTyped(["These are absolutely my hands and my setup"].concat(typed));
      }
    }
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mousedown', mouseclick);
    
    return() => {
      window.removeEventListener('mousemove', mousemove);
    }
  })

  return (
    <div className="home">
      <Navbar />
      <TypeWriter typed = {typed} setTyped={setTyped}/>
      <TaskBar/>
      <Cursor x={cursorPos.x} y={cursorPos.y}/>
    </div>
    
    
  );
 
}

export default Home;
