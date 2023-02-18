import React from 'react';
import {useState, useEffect} from 'react';

import TypeWriter from './TypeWriter';
import TaskBar from "./TaskBar";
import Cursor from "./Cursor";
import Navbar from "./Navbar";

const Home = () => {
  
  const [cursorPos, setCursorPos] = useState({x:0, y:0});

  // Check runs all the time to reset cursor position
  useEffect(() => {
    const mousemove = (e) =>{
      setCursorPos({x: e.clientX, y: e.clientY});
    }
    
    window.addEventListener('mousemove', mousemove);
    
    return() => {
      window.removeEventListener('mousemove', mousemove);
    }
  })

  return (
    <div className="home">
      <Navbar />
      <TypeWriter/>
      <TaskBar/>
      <Cursor x={cursorPos.x} y={cursorPos.y}/>
      
    </div>
    
    
  );
 
}

export default Home;
