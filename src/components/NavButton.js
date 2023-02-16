import React from 'react';

const NavButton = ({name, clickLink}) => {
  return (
    <div className="navButton">
      <a href={clickLink} ><button> {name} </button></a>
    </div>
  )
}

export default NavButton;

