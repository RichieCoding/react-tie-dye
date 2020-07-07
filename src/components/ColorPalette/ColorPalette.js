import React from 'react';
import Color from '../Color/Color';

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
                <Color key={color} color={color} click={colorClick} />
              ))}
            </div>
            <p>
              Price: <span style={{ fontSize: '20px' }}>{sockPrice}</span>
              </p>
            {/* {colorsPicked.length < 3 ? (
              <p>
                Price: <span style={{ fontSize: '20px' }}>$15</span>
              </p>
            ) : (
              <p>
                Price: <span style={{ fontSize: '20px' }}>$16</span>
              </p>
            )} */}
          </div>
        )}
      </div>
      <div className='colors'>
        {colors.map((color) => (
          <Color key={color} color={color} click={colorClick} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ColorPalette;
