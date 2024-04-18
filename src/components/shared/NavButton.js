import { Link } from "react-router-dom";
import "./navButton.css";

const NavButton = ({ link, child }) => {
  return (
    <div className="navButton">
      <Link to={link}>
        {child}
      </Link>
    </div>
  );
};

export default NavButton;
