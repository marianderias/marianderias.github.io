import "./typeWriter.css";
import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  // Array of string to be typed followed by duration
  const typed = [
    "Programmer",
    2000,
    "Web developer",
    2000,
    "Engineer",
    2000,
    "Your new employee",
    2000,
  ];
  return (
    <div className="typeWriter">
      <div className="greeting">
        <h1 style={{ color: "white" }}>Hey!&nbsp; I'm &nbsp;</h1>
        <h1 className="myName" style={{ color: "#E6B0EB" }}>
          Marian &nbsp;Derias
        </h1>
      </div>
      <div className="typist">
        <TypeAnimation sequence={typed} repeat={Infinity} />
      </div>
    </div>
  );
};

export default TypeWriter;
