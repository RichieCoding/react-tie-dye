import React from 'react';
import './cart-page.styles.scss';
import { CartConsumer } from '../../contexts/cart';
import CartProductCard from '../../components/CartProductCard/CartProductCard';

const CartPage = () => {
  return (
    <CartConsumer>
      {({ cart, setCart }) => (
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
                    setCart={setCart}
                    cart={cart}
                  />
                  // <div key={} style={{ marginBottom: '20px' }}>
                  //   <h3>Sock Color: {product.sockColor}</h3>
                  //   <h3>Colors Picked: {product.colorsPicked}</h3>
                  // </div>
                ))}
              </div>
              <div className='cart-total'>
                <h3 className='summary-title'>Order Summary</h3>
                <div className='total'>
                  <p>Total:</p>
                  <p id='cart-total-cost'>
                    ${cart.reduce((acc, cur) => {
                      return acc + cur.price;
                    }, 0)}
                  </p>
                </div>
                <button id='checkout-btn'>Checkout</button>
              </div>
            </div>
          )}
        </div>
      )}
    </CartConsumer>
  );
};

export default CartPage;
