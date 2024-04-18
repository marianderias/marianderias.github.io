import arrow from "../resources/transparent_arrow.png";
import { Link } from "react-router-dom";
import "./more.css"

const More = () => {
  return (
    <div className="more">
      <p>Find out more</p>
      <Link to="/about" className="moreArrow">
        <img alt="arrow" src={arrow} />
      </Link>
    </div>
  );
};

export default More;
