import React from 'react';
import Color from '../Color/Color';

import './color-palette.styles.scss';

const ColorPalette = ({ colorsPicked, colors, colorClick, sockPrice }) => {
  return (
    <React.Fragment>
      <div className='colors-picked'>
        {colorsPicked.length === 0 ? (
          <p className='text'>Choose 2-3 colors: </p>
        ) : (
          <div className='colors-cost'>
            <div className='all-colors-picked'>
              {colorsPicked.map((color) => (
                <Color key={Object.keys(color)} color={color} click={colorClick} />
              ))}
            </div>
            <p>
              Price: <span style={{ fontSize: '20px' }}>{sockPrice}</span>
              </p>
          </div>
        )}
      </div>
      <div className='colors'>
        {colors.map((color) => (
          <Color key={Object.keys(color)} color={color} click={colorClick} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ColorPalette;
