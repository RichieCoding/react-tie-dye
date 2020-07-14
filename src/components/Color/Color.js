import React from 'react';

import './color.styles.scss';

const Color = ({ color, colorName, click=null }) => {
  return (
    <div className='color-container' onClick={() => {click(color)}}>
      <div className="color" style={{'background': Object.values(color)}}></div>
    </div>
  )
}

export default Color
