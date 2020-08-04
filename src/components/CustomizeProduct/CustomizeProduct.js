import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ColorPalette from '../ColorPalette/ColorPalette';
import Button from '../Button/Button';
import Faq from 'react-faq-component';
import PatternSelector from '../PatternSelector/PatternSelector';
import CartContext from '../../contexts/cart';
import { colorObj } from '../../data/colorData';
import { productFaq } from '../../data/productFaq';
import './customize-product.styles.scss';

import nikeWhite from '../../assets/imgs/white-800.png';
import nikeBlack from '../../assets/imgs/black-800.png';
import nikeGrey from '../../assets/imgs/grey-800.png';
import burst from '../../assets/patterns/blast1.svg';
import freestyle from '../../assets/patterns/freestyle1.svg';
import polkaDot from '../../assets/patterns/polka-dot1.svg';
import spiral from '../../assets/patterns/spiral1.svg';
import stripe from '../../assets/patterns/stripe1.svg';

const CustomizeProduct = ({ match }) => {
  const [sock, setSock] = useState({
    color: 'White',
    img: nikeWhite,
  });
  const [price, setPrice] = useState(15);
  const [size, setSize] = useState(null);
  const [colorsPicked, setColorsPicked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyColors, setEmptyColors] = useState(false);
  const [emptyPattern, setEmptyPattern] = useState(false);
  const [emptySize, setEmptySize] = useState(false);
  const [showCartBtn, setShowCartBtn] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const { cart, setCart } = useContext(CartContext);

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
    console.log(match.params.productId);
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

  const handleAtc = () => {
    const productObj = {
      sockName: 'Nike Tie-Dye Socks',
      sockColor: sock.color,
      sockImg: sock.img,
      price: price,
      pattern: selectedPattern,
      colorsPicked: colorsPicked,
      size: size,
    };
    if (colorsPicked.length < 2) setEmptyColors(true);
    if (!selectedPattern) setEmptyPattern(true);
    if (!size) setEmptySize(true);
    if (colorsPicked.length >= 2 && size && selectedPattern) {
      setIsLoading(true);
      setCart([...cart, productObj]);
      localStorage.cart = JSON.stringify([...cart, productObj]);
      handleReset();
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleReset = () => {
    setColorsPicked([]);
    setSize(null);
    setSelectedPattern(null);
    setShowCartBtn(true);
    setEmptyColors(false);
    setEmptyPattern(false);
    setEmptySize(false);
  };

  const handleSize = (sizeChosen) => {
    setSize(sizeChosen);
    handlePrice();
  };

  const handlePrice = () => {
    const len = colorsPicked.length;
    if (size === 'Adult' || !size) {
      if (len === 3) {
        setPrice(16);
      } else {
        setPrice(15);
      }
    }
    if (size === 'Child') {
      if (len === 3) {
        setPrice(11);
      } else {
        setPrice(10);
      }
    }
  };

  const patterns = ['FreeStyle', 'Stripe', 'Spiral', 'Polka Dot', 'Burst'];

  const patternImgs = [freestyle, stripe, spiral, polkaDot, burst];

  const buttonStyle = {
    background: 'black',
    color: 'white',
  };

  return (
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
          <p className='size-text'>Choose Pattern:</p>
          <div className='product-pattern'>
            {patterns.map((pattern, index) => {
              return (
                <PatternSelector
                  key={index}
                  name={pattern}
                  img={patternImgs[index]}
                  selectedPattern={selectedPattern}
                  setSelectedPattern={setSelectedPattern}
                />
              );
            })}
          </div>
        </div>

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
            {match.params.productId === 'Grey Nike Tie-Dye Socks' ? null : (
              <button
                style={size === 'Child' ? buttonStyle : null}
                name='Child'
                onClick={(e) => handleSize(e.target.name)}
              >
                Child
              </button>
            )}
          </div>
        </div>

        <div className='text-info'>
          <Button isLoading={isLoading} loadingText='Added' onClick={handleAtc}>
            Add to Cart
          </Button>
          {emptyColors ? <p id='error-text'>Choose colors</p> : null}
          {emptyPattern ? <p id='error-text'>Choose a pattern</p> : null}
          {emptySize ? <p id='error-text'>Choose a size</p> : null}
          {showCartBtn ? (
            <Link to='/cart'>
              <p id='cart-btn'>Go to Cart</p>
            </Link>
          ) : null}
        </div>
        <div className='faq-container'>
          <Faq
            className='faq'
            data={productFaq}
            styles={{ bgColor: 'transparent' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomizeProduct;
