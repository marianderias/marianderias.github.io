
const NavButton = ({ link, child }) => {
  return (
    <div className="navButton">
      <a href={link}>{child}</a>
    </div>
  );
};

export default NavButton;
