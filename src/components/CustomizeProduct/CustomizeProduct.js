import React, { useState, useEffect } from 'react';
import ColorPalette from '../ColorPalette/ColorPalette';
import { CartConsumer } from '../../contexts/cart';
import nikeWhite from '../../assets/imgs/white-800.png';
import nikeBlack from '../../assets/imgs/black-800.png';
import nikeGrey from '../../assets/imgs/grey-800.png';
import { colorObj } from '../../utils/colorData';
import './customize-product.styles.scss';

const CustomizeProduct = ({ match }) => {
  const [sock, setSock] = useState({
    color: 'White',
    img: nikeWhite,
  });
  const [price, setPrice] = useState(15);
  const [size, setSize] = useState(null);
  const [colorsPicked, setColorsPicked] = useState([]);
  const [atcBtn, setAtcBtn] = useState('Add to Cart');

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
      const removed = colorsPicked.filter((pickedColor) => {
        return Object.keys(color)[0] !== Object.keys(pickedColor)[0]
      })
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
      size: size,
    };
    if (colorsPicked.length >= 2 && size) {
      setCart([...cart, productObj]);
      localStorage.cart = JSON.stringify([...cart, productObj])
      setAtcBtn('\u00A0\u00A0\u00A0\u00A0Added\u00A0\u00A0\u00A0\u00A0');
      setColorsPicked([]);
      setSize(null);
      setTimeout(() => {
        setAtcBtn('Add to Cart');
      }, 1000);
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
              colors={colorObj}
              colorsPicked={colorsPicked}
              colorClick={handleColorClick}
              sockPrice={price}
            />
            <div className='product-size'>
              <button
                style={
                  size === 'Adult'
                    ? { background: 'black', color: 'white' }
                    : null
                }
                onClick={() => setSize('Adult')}
              >
                Adult
              </button>
              <button
                style={
                  size === 'Child'
                    ? { background: 'black', color: 'white' }
                    : null
                }
                onClick={() => setSize('Child')}
              >
                Child
              </button>
            </div>
            <div className='text-info'>
              <button
                style={
                  atcBtn !== 'Add to Cart'
                    ? { background: 'black', color: 'white' }
                    : {background: 'transparent', color: 'black'}
                }
                onClick={() => handleAtc(cart, setCart)}
              >
                {atcBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </CartConsumer>
  );
};

export default CustomizeProduct;
