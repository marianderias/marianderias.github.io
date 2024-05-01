import "./navBar.css";
import "./navButton.css";

import logo from "../resources/md-logo-white.png";
import resume from "../resources/Marian Derias.pdf";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navHome">
        <a href="#top">
          <img alt="MD logo" src={logo} />
        </a>
      </div>

      <div className="navButton">
        <a href={resume}>
          <button>Resumé</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
