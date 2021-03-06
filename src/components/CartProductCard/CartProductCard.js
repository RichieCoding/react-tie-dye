import React, { useContext } from 'react';
import { CartConsumer } from '../../contexts/cart';
import './cart-product-card.styles.scss';
import NikeWhite from '../../assets/imgs/white-200.png';
import NikeBlack from '../../assets/imgs/black-200.png';
import NikeGrey from '../../assets/imgs/grey-200.png';

const CartProductCard = ({ productInfo, index, orderSummary }) => {
  const { sockColor, sockName, colorsPicked, price, size, pattern } = productInfo;
  const { cart, setCart } = useContext(CartConsumer);

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
      <div className="product-img">
        <img src={renderImg()} alt='product' />
      </div>
      <div className='product-info info'>
        <div className='title-remove-btn'>
          <h3 id='product-title'>{sockName}</h3>
          {!orderSummary ? (
            <button onClick={() => handleRemoveItem(index)}>X</button>
          ) : null}
        </div>
        <div className='product-size info'>
          <p>Size: {size}</p>
        </div>
        <div className='product-size info'>
          <p>Pattern: {pattern}</p>
        </div>
        <div className='colors-picked info'>
          <div className='colors-text'>Colors: {colorsPicked.map(color => Object.keys(color)).join(', ')}</div>
        </div>
        <div className='product-price'>
          <p id='price'>{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
