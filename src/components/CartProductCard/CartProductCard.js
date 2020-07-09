import React from 'react';
import './cart-product-card.styles.scss';
// import Color from '../Color/Color';

const CartProductCard = ({ productInfo, cart, setCart, index }) => {
  const { sockImg, sockName, colorsPicked, price, size } = productInfo;
  const handleRemoveItem = (index) => {
    const newCart = [...cart];
    const front = newCart.slice(0, index);
    const back = newCart.slice(index + 1);
    setCart([...front, ...back]);
    localStorage.cart = JSON.stringify([...front, ...back]);
  };
  return (
    <div className='cart-product-card'>
      <img src={sockImg} alt='product' />
      <div className='product-info info'>
        <div className='title-remove-btn'>
          <h3 id='product-title'>{sockName}</h3>
          <button onClick={() => handleRemoveItem(index)}>X</button>
        </div>
        <div className='product-size info'>
          <p>Size: {size}</p>
        </div>
        <div className='colors-picked info'>
          <div className='colors-text'>Colors: {colorsPicked.join(', ')}</div>
          {/* <div className='colors-img'>
            {sockColors.map((color) => (
              <Color color={color} />
            ))}
          </div> */}
        </div>
        <div className='product-price'>
          <p id='price'>{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
