import "./navBar.css";

import NavButton from "./NavButton";
import logo from "../resources/md-logo-white.png";
import resume from "../resources/Marian Derias Resume.pdf";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navHome">
        <Link to="/resume">
          <img alt="MD logo" src={logo} />
        </Link>
      </div>

      <NavButton link="/about" child={<button>About me</button>} />

      <div className="navButton">
        <a href={resume} download>
          <button>Resumé Download</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
