import React, { useContext } from 'react';
import './cart-page.styles.scss';
import { CartConsumer } from '../../contexts/cart';
import CartProductCard from '../../components/CartProductCard/CartProductCard';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart } = useContext(CartConsumer);
  return (
    <div className='cart-page-container'>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='cart-wrapper'>
          <div className='cart-feed'>
            {cart.map((product, index) => (
              <CartProductCard
                key={`${index}-${product.sockColor}`}
                index={index}
                productInfo={product}
              />
            ))}
          </div>
          <div className='cart-total'>
            <h3 className='summary-title'>Order Summary</h3>
            <div className='total'>
              <p>Total:</p>
              <p id='cart-total-cost'>
                $
                {cart.reduce((acc, cur) => {
                  return acc + cur.price;
                }, 0)}
              </p>
            </div>
            <Link to='/checkout'>
              <button id='checkout-btn'>Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
