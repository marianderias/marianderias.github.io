import React from 'react';
import {TypeAnimation} from 'react-type-animation';

/* This component is for the middle section of the website*/
const TypeWriter = () => {

  // These are the strings I'm using for the type writing in the middle of the screen. 'The react-type animation module' I'm using does not allow these to be changed.
  const typed = ["Programmer", 2000, "Web developer", 2000, "Student", 2000, "Your new employee", 2000];
  return (
    <div className='typeWriter'>
        <div className="greeting"><h1 style={{color: 'white'}}>Hey!&nbsp; I'm &nbsp;</h1><h1 className='myName' style={{color:'#E6B0EB'}}>Marian &nbsp;Derias</h1></div>
        <div className='typist'>
          <TypeAnimation
          sequence= {typed}
          repeat={Infinity}
          />
        </div>
    </div>
  )
}

export default TypeWriter;
