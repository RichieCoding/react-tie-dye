import React from 'react';
import useHover from '../../hooks/useHover';

import './color.styles.scss';

const Color = ({ color, colorName, click=null }) => {
  const [hovering, attrs] = useHover();
  return (
    <div {...attrs} className='color-container' onClick={() => {click(color)}}>
      {hovering ? <p id='color-text'>{Object.keys(color)[0]}</p> : null}
      <div className="color" style={{'background': Object.values(color)}}></div>
    </div>
  )
}

export default Color
