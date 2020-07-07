import React, { useState, useEffect } from 'react';
import ColorPalette from '../ColorPalette/ColorPalette';
import { CartConsumer } from '../../contexts/cart';
import nikeWhite from '../../assets/imgs/Nike-Sock.png';
import nikeBlack from '../../assets/imgs/Nike-Black-Sock.png';
import nikeGrey from '../../assets/imgs/Nike-Grey-Sock.png';
import './customize-product.styles.scss';

const CustomizeProduct = ({ match }) => {
  const [sock, setSock] = useState({
    color: 'White',
    img: nikeWhite,
  });
  const [price, setPrice] = useState(15);
  const [colorsPicked, setColorsPicked] = useState([]);
  const [atcBtn, setAtcBtn] = useState('Add to Cart');
  const colors = [
    'Black',
    'Violet',
    'Purple',
    'Blue',
    'Turquoise',
    'Teal',
    'Green',
    'Pink',
    'Fuchsia',
    'Red',
    'Coral',
    'Orange',
    'Yellow',
    'Lime',
  ];

  useEffect(() => {
    const chosenColor = match.params.productId.split(' ')[0];
    switch (chosenColor) {
      case 'White':
        setSock({ color: chosenColor, img: nikeWhite });
        break;
      case 'Black':
        setSock({ color: chosenColor, img: nikeBlack });
        break;
      case 'Grey':
        setSock({ color: chosenColor, img: nikeGrey });
        break;
      default:
        setSock({ color: 'White', img: nikeWhite });
    }
    if (colorsPicked.length === 3) {
      setPrice(16);
    } else {
      setPrice(15);
    }
  }, [match.params.productId, colorsPicked]);

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

  const handleAtc = (cart, setCart) => {
    const productObj = {
      sockName: 'Nike Tie-Dye Socks',
      sockColor: sock.color,
      sockImg: sock.img,
      price: price,
      colorsPicked: colorsPicked,
    };
    if (colorsPicked.length >= 2) {
      setCart([...cart, productObj]);
      setAtcBtn('\u00A0\u00A0\u00A0\u00A0Added\u00A0\u00A0\u00A0\u00A0');
      setColorsPicked([]);
      setTimeout(() => {
        setAtcBtn('Add to Cart');
      }, 1500);
    }
  };

  return (
    <CartConsumer>
      {({ cart, setCart }) => (
        <div className='customize-product'>
          <img className='product-img' src={sock.img} alt='Product' />

          <div className='custom-feature'>
            <div id='mb-title'>
              <h2>{`Nike Tie-Dye Socks`}</h2>
              <p>{`${sock.color}`}</p>
            </div>

            <ColorPalette
              colors={colors}
              colorsPicked={colorsPicked}
              colorClick={handleColorClick}
              sockPrice={price}
            />

            <div className='text-info'>
              <button onClick={() => handleAtc(cart, setCart)}>{atcBtn}</button>
            </div>
          </div>
        </div>
      )}
    </CartConsumer>
  );
};

export default CustomizeProduct;
