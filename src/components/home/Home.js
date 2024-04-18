import "./Home.css";

import Centre from "./Centre";
import Waves from "./Circle";
import TaskBar from "../shared/TaskBar";
import Navbar from "../shared/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Waves />
      <Navbar />
      <Centre />
      <TaskBar />
    </div>
  );
};

export default Home;
