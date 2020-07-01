import React, { useState } from 'react';
import ColorPalette from '../ColorPalette/ColorPalette';

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
      <img className='product-img' src={productImg} alt={`${name} Sock`} />

      <div className='custom-feature'>
        <h2 id='mb-title'>{`${name} Tie-Dye Socks`}</h2>

        <ColorPalette colors={colors} colorsPicked={colorsPicked} colorClick={handleColorClick} />

        <div className='text-info'>
          <button>Add to Cart</button>
        </div>

      </div>
    </div>
  );
};

export default CustomizeProduct;
