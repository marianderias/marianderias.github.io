import "./taskbar.css";
import BottomButton from "./BottomButton";
import gitLogo from "../resources/github_logo.png";
import fbLogo from "../resources/facebook_logo.png";
import linkedLogo from "../resources/linkedin_logo.png";

const TaskBar = () => {
  return (
    <div className="taskBar">
      <div className="linksBar">
        <BottomButton clickLink="https://github.com/Dermar" image={gitLogo} />
        <BottomButton
          clickLink="https://www.linkedin.com/in/marian-derias-92a71a259/"
          image={fbLogo}
        />
        <BottomButton
          clickLink="https://www.facebook.com/marian.derias.96"
          image={linkedLogo}
        />
      </div>
      <div>
        <p>Email: </p>
        <a href="mailto:marianderias@gmail.com">marianderias@gmail.com</a>
      </div>
      <p>Phone: 0430927893</p>
    </div>
  );
};

export default TaskBar;
