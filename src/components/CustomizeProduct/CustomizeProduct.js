import React, { useState } from 'react';
import Color from '../Color/Color';

import './customize-product.styles.scss';

const CustomizeProduct = ({ productImg, name }) => {
  const [colorsPicked, setColorsPicked] = useState([]);
  const colors = [
    'black',
    'violet',
    'purple',
    'blue',
    'turquoise',
    'teal',
    'green',
    'pink',
    'fuchsia',
    'red',
    'coral',
    'orange',
    'yellow',
    'lime',
  ];
  const handleColorClick = (color) => {
    if (colorsPicked.indexOf(color) === -1) {
      if (colorsPicked.length !== 3) {
        setColorsPicked([...colorsPicked, color]);
      }
    } else {
      const removed = colorsPicked.filter(
        (pickedColor) => color !== pickedColor
      );
      setColorsPicked(removed);
    }
  };

  return (
    <div className='customize-product'>
      {/* <h2 id='mb-title'>{`${name} Tie-Dye Socks`}</h2> */}
      <img className='product-img' src={productImg} alt={`${name} Sock`} />
      <div className='custom-feature'>
        <h2 id='mb-title'>{`${name} Tie-Dye Socks`}</h2>
        <div className='colors-picked'>
          {colorsPicked.length === 0 ? (
            <p className='text'>Choose 2-3 colors: </p>
          ) : (
            <div className='colors-cost'>
              <div className='all-colors-picked'>
                {colorsPicked.map((color) => (
                  <Color key={color} color={color} click={handleColorClick} />
                ))}
              </div>
              {colorsPicked.length < 3 ? (
                <p>
                  Price: <span style={{'fontSize': '20px'}}>$15</span>
                </p>
              ) : (
                <p>Price: <span style={{'fontSize': '20px'}}>$16</span></p>
              )}
            </div>
          )}
        </div>
        <div className='colors'>
          {colors.map((color) => (
            <Color
              active={colorsPicked}
              key={color}
              color={color}
              click={handleColorClick}
            />
          ))}
        </div>
        <div className='text-info'>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeProduct;
