import React, { useState, useEffect } from 'react';
import './order-summary.styles.scss';
import CartProductCard from '../CartProductCard/CartProductCard';

const OrderSummary = ({ inputNames, shipping, cart, setPage }) => {
  const [shippingPrice, setShippingPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
    setSubtotal(() =>
      cart.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0)
    );
    handleShipping();
    setTotal(() => subtotal + shippingPrice)
  });

  const handleShipping = () => {
    if (shipping === 'Shipping' && cart.length > 1) {
      setShippingPrice(10);
    } else if (shipping === 'Shipping' && cart.length === 1) {
      setShippingPrice(5);
    } else {
      setShippingPrice(0);
    }
  };

  return (
    <div className='order-summary-container'>
      <div className='payment-option info-container'>
        <h3 className='order-title'>Payment:</h3>
        <select onChange={e => setPayment(e.target.value)} name='payment' id='payment'>
          <option value='Choose Payment Method'>
            Choose Payment Method...
          </option>
          <option value='Cashapp'>Cashapp</option>
          <option value='Venmo'>Venmo</option>
          {shipping === 'Pickup' ? <option value='Cash'>Cash</option> : null}
        </select>
      </div>
      <div className="shipping-pickup-container">
        <div className='pickup-info info-container'>
          <h3 className='order-title'>Your Info:</h3>
          {inputNames[0].map((input, index) => (
            <p key={index}>{`${input}`}</p>
          ))}
        </div>
        {shipping === 'Shipping' ? (
          <div className='shipping-address info-container'>
            <h3 className='order-title'>Shipping Address:</h3>
            <p>{inputNames[0][0]}</p>
            {inputNames[1].map((input, index) => (
              <p key={index}>{`${input}`}</p>
            ))}
          </div>
        ) : null}
      </div>
      <div className='cart-summary info-container'>
        <h3 className='order-title'>Items:</h3>
        {cart.map((product, index) => (
          <CartProductCard
            key={`${index}-${product.sockColor}`}
            index={index}
            productInfo={product}
            cart={cart}
          />
        ))}
      </div>
      <div className='order-total info-container'>
        <h3 className='order-title'>Order Summary:</h3>
        <div className='subtotal total-info'>
          <p>Subtotal:</p>
          <p className='cost-text'>{`$ ${subtotal}`}</p>
        </div>
        {shipping === 'Shipping' ? (
          <div className='shipping total-info'>
            <p>Shipping:</p>
            <p className='cost-text'>{`$ ${shippingPrice}`}</p>
          </div>
        ) : (
          <div className='pickup total-info'>
            <p>Pickup:</p>
            <p className='cost-text'>Free</p>
          </div>
        )}
        <div className='total total-info'>
          <p>Total:</p>
          <p className='total-cost-text'>{`$ ${total}`}</p>
        </div>
      </div>
      <div className='page-btn'>
        <button onClick={() => setPage(1)}>Back</button>
        <button onClick={() => setPage(3)}>Place Order</button>
      </div>
    </div>
  );
};

export default OrderSummary;
