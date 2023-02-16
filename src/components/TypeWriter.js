import React from 'react';
import Typed from 'react-typed';

/* This component is for the middle section of the website*/
const TypeWriter = ({typed, setTyped}) => {
  return (
    <div className='typeWriter'>
        <div className="greeting"><h1 style={{color: 'white'}}>Hey!&nbsp; I'm &nbsp;</h1><h1 className='myName' style={{color:'#E6B0EB'}}>Marian &nbsp;Derias</h1></div>
        <div className='typist'>
          <Typed 
          strings= {typed}
          typeSpeed= {80}
          backSpeed= {100}
          loop
          />
        </div>
    </div>
  )
}

export default TypeWriter;
