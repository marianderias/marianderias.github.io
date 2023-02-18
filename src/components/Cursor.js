import React from 'react';

/*Very simple custom cursor to be styled */
const Cursor = ({x, y}) => {
  return (
    <div className='cursor' style={{top: y, left: x}}>
    </div>
  )
}

export default Cursor;
