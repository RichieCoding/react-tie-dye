import React from 'react';

import './color.styles.scss';

const Color = ({ color, click }) => {
  return (
    <div className='color-container' onClick={() => {click(color)}}>
      <div className="color" style={{'background': color}}></div>
    </div>
  )
}

export default Color
