import React from 'react';
import './cart-product-card.styles.scss';
import NikeWhite from '../../assets/imgs/white-200.png';
import NikeBlack from '../../assets/imgs/black-200.png';
import NikeGrey from '../../assets/imgs/grey-200.png';

const CartProductCard = ({ productInfo, cart, setCart, index }) => {
  const { sockColor, sockName, colorsPicked, price, size } = productInfo;
  const handleRemoveItem = (index) => {
    const newCart = [...cart];
    const front = newCart.slice(0, index);
    const back = newCart.slice(index + 1);
    setCart([...front, ...back]);
    localStorage.cart = JSON.stringify([...front, ...back]);
  };
  const renderImg = () => {
    switch(sockColor) {
      case 'White':
        return NikeWhite
      case 'Black':
        return NikeBlack
      case 'Grey':
        return NikeGrey
      default:
        return NikeWhite
    }
  }
  return (
    <div className='cart-product-card'>
      <img src={renderImg()} alt='product' />
      <div className='product-info info'>
        <div className='title-remove-btn'>
          <h3 id='product-title'>{sockName}</h3>
          {setCart ? (
            <button onClick={() => handleRemoveItem(index)}>X</button>
          ) : null}
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
