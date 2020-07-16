import React, { useState, useEffect } from 'react';
import ColorPalette from '../ColorPalette/ColorPalette';
import { CartConsumer } from '../../contexts/cart';
import nikeWhite from '../../assets/imgs/white-800.png';
import nikeBlack from '../../assets/imgs/black-800.png';
import nikeGrey from '../../assets/imgs/grey-800.png';
import { colorObj } from '../../utils/colorData';
import './customize-product.styles.scss';
import Button from '../Button/Button';

const CustomizeProduct = ({ match }) => {
  const [sock, setSock] = useState({
    color: 'White',
    img: nikeWhite,
  });
  const [price, setPrice] = useState(15);
  const [size, setSize] = useState(null);
  const [colorsPicked, setColorsPicked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

    handlePrice(); 
    
  }, [match.params.productId, colorsPicked, size]);

  const handleColorClick = (color) => {
    if (colorsPicked.indexOf(color) === -1) {
      if (colorsPicked.length !== 3) {
        setColorsPicked([...colorsPicked, color]);
      }
    } else {
      const removed = colorsPicked.filter((pickedColor) => {
        return Object.keys(color)[0] !== Object.keys(pickedColor)[0];
      });
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
      setIsLoading(true);
      setCart([...cart, productObj]);
      localStorage.cart = JSON.stringify([...cart, productObj]);
      setColorsPicked([]);
      setSize(null);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleSize = (sizeChosen) => {
    setSize(sizeChosen);
    handlePrice();
  };

  const handlePrice = () => {
    const len = colorsPicked.length;
    if (size === 'Adult' || !size) {
      if (len === 3) {
        setPrice(16)
      } else {
        setPrice(15)
      }
    }
    if (size === 'Child') {
      if (len === 3) {
        setPrice(11)
      } else {
        setPrice(10)
      }
    }
  };

  const buttonStyle = {
    background: 'black',
    color: 'white',
  };

  return (
    <CartConsumer>
      {({ cart, setCart }) => (
        <div className='customize-product'>
          <div className='img-container'>
            <img className='product-img' src={sock.img} alt='Product' />
          </div>

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
            <div className='product-size-container'>
              <p className='size-text'>Choose Size:</p>
              <div className='product-size'>
                <button
                  style={size === 'Adult' ? buttonStyle : null}
                  name='Adult'
                  onClick={(e) => handleSize(e.target.name)}
                >
                  Adult
                </button>
                <button
                  style={size === 'Child' ? buttonStyle : null}
                  name='Child'
                  onClick={(e) => handleSize(e.target.name)}
                >
                  Child
                </button>
              </div>
            </div>
            <div className='text-info'>
              <Button
                isLoading={isLoading}
                loadingText='Added'
                onClick={() => {
                  handleAtc(cart, setCart);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </CartConsumer>
  );
};

export default CustomizeProduct;
