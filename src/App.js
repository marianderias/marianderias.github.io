import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Home from "./components/home/Home";
import About from "./components/resume/About";
import React from "react";
import Cursor from "./components/shared/Cursor";
import "./index.css";

export const CURSOR_WIDTH = 12;
const MEASUREMENT_ID = "G-DYNN0X06V9";
ReactGA.initialize(MEASUREMENT_ID);

function App() {
  const { height, width } = useWindowDimensions();
  const [cursorPos, setCursorPos] = useState({ x: width / 2, y: height / 3 });
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const mousemove = (e) => {
    var xPos = e.clientX;
    var yPos = e.clientY;
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
    <Router className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Home />} />
      </Routes>
      <Cursor x={cursorPos.x} y={cursorPos.y} />
    </Router>
  );
}

export default App;
