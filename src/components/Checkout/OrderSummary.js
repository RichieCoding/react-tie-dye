import React, { useState, useEffect } from 'react';
import './order-summary.styles.scss';
import CartProductCard from '../CartProductCard/CartProductCard';
import emailjs from 'emailjs-com';
import { CartConsumer } from '../../contexts/cart';
import Button from '../Button/Button';
import LoadingBars from '../../assets/gif/Spin-1s-450px.svg';

const OrderSummary = ({
  inputNames,
  shipping,
  cart,
  setPage,
  setPayment,
  payment,
}) => {
  const [shippingPrice, setShippingPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubtotal(() =>
      cart.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0)
    );
    handleShipping();
    setTotal(subtotal + shippingPrice);
  }, [cart, total, subtotal, shippingPrice]);

  const handleShipping = () => {
    if (shipping === 'Shipping' && cart.length > 1) {
      setShippingPrice(10);
    } else if (shipping === 'Shipping' && cart.length === 1) {
      setShippingPrice(5);
    } else {
      setShippingPrice(0);
    }
  };

  const handlePlaceOrder = () => {
    if (payment === '' || payment === 'Choose Payment Method') return;
    setLoading(true)

    let templateParams;
    let templateId;

    if (shipping === 'Pickup') {
      templateParams = {
        shipping: shipping,
        to_name: 'Jasmine',
        from_name: inputNames[0][0],
        email: inputNames[0][1],
        phone_number: inputNames[0][2],
        payment_method: payment,
        items_ordered: cart.length,
        items: JSON.stringify(cart),
        subtotal: subtotal,
        total: total,
      };
      templateId = 'rsvp_acj';
    }
    if (shipping === 'Shipping') {
      templateParams = {
        shipping: shipping,
        to_name: 'Jasmine',
        from_name: inputNames[0][0],
        email: inputNames[0][1],
        phone_number: inputNames[0][2],
        address: inputNames[1][0],
        state: inputNames[1][1],
        city: inputNames[1][2],
        zipcode: inputNames[1][3],
        payment_method: payment,
        items_ordered: cart.length,
        items: JSON.stringify(cart),
        subtotal: subtotal,
        shipping_cost: shippingPrice,
        total: total,
      };
      templateId = 'template_ERb80S2H';
    }
    emailjs
      .send('gmail', templateId, templateParams, 'user_w0EYdaI6nSMGpyW93GQpm')
      .then(
        (result) => {
          setPage(3);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <CartConsumer>
      {({ cart, setCart }) => (
        <div className='order-summary-container'>
          <div className='payment-option info-container'>
            <h3 className='order-title'>Payment:</h3>
            <select
              onChange={(e) => setPayment(e.target.value)}
              name='payment'
              id='payment'
            >
              <option value='Choose Payment Method'>
                Choose Payment Method...
              </option>
              <option value='Cashapp'>Cashapp</option>
              <option value='Venmo'>Venmo</option>
              {shipping === 'Pickup' ? (
                <option value='Cash'>Cash</option>
              ) : null}
            </select>
          </div>
          <div className='shipping-pickup-container'>
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
            <Button 
              isLoading={loading}
              loadingText={<img style={{width: '25px'}} src={LoadingBars} alt='Loading...' />}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </div>
        </div>
      )}
    </CartConsumer>
  );
};

export default OrderSummary;
