import "./Home.css"
import { useState, useEffect } from "react";
import { useWindowDimensions } from 'react-native';

import Waves from "./Waves";
import TypeWriter from "./TypeWriter";
import TaskBar from "./TaskBar";
import Cursor from "./Cursor";
import Navbar from "./Navbar";

export const CURSOR_WIDTH = 12;

const Home = () => {
  const { height, width } = useWindowDimensions();
  const [cursorPos, setCursorPos] = useState({ x: width/2, y: height/3 });


  const mousemove = (e) => {
    var xPos = e.clientX;
    var yPos = e.clientY;
    console.log("xpos: " + xPos + ", ypos: " + yPos);
    if (xPos + CURSOR_WIDTH > width) {
      xPos = width - CURSOR_WIDTH;
    } else if (xPos - CURSOR_WIDTH < 0) {
      xPos = CURSOR_WIDTH;
    }

    if (yPos + CURSOR_WIDTH > height) {
      yPos = height - CURSOR_WIDTH;
    } else if (yPos - CURSOR_WIDTH < 0) {
      yPos = CURSOR_WIDTH;
    }

    setCursorPos({ x: xPos, y: yPos });
  };

  // Check runs all the time to reset cursor position
  useEffect(() => {
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  });

  return (
    <div className="home">
      <Waves />
      <Navbar />
      <TypeWriter />
      <TaskBar />
      <Cursor x={cursorPos.x} y={cursorPos.y} />
    </div>
  );
};

export default Home;
