import "./Home.css";
import Circle from "./Circle";
import TaskBar from "../shared/TaskBar";
import Navbar from "../shared/Navbar";
import TypeWriter from "./TypeWriter";
import Resume from "./Resume";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="intro">
        <Circle />
        <TypeWriter />
      </div>
      <Resume />
      <TaskBar />
    </div>
  );
};

export default Home;
