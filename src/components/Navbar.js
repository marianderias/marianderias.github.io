import "./navBar.css"
import "./navButton.css"

import logo from "./resources/md-logo-white.png";
import resume from "./resources/Marian Derias Resume.pdf";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navHome">
        <a href=".">{<img alt="MD logo" src={logo} />}</a>
      </div>

      <div className="navButton">
        <a href={resume} download>
          <button>Resumé Download</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
