import React, { useEffect } from 'react';
import Cashapp from '../../assets/payment/cashapp.png';
import Venmo from '../../assets/payment/venmo.png';
import './confirm.styles.scss';
import PaymentInfo from '../PaymentInfo/PaymentInfo';

const Confirm = ({ payment, setCart, cart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      setCart([]);
      localStorage.cart = JSON.stringify([]);
    };
  }, [setCart]);

  const renderPayment = () => {
    switch (payment) {
      case 'Cashapp':
        return (
          <PaymentInfo
            logo={Cashapp}
            username='$jassscasssh'
            link='https://cash.app/$jassscasssh'
          />
        );
      case 'Venmo':
        return (
          <PaymentInfo
            logo={Venmo}
            username='@shopacj'
            link='https://apps.apple.com/us/app/venmo/id351727428'
          />
        );
      default:
        return null
    }
  };
  return (
    <>
    <div className='confirm-container'>
      <header>
        <h2>Order Recieved!</h2>
      </header>
      <h3>Thank you!</h3>
      <p>We have received your order!</p>
      <br />
      {payment !== 'Cash' ? (
        <p>To complete your order please make payment with {payment}</p>
      ) : (
        <p id='cash-payment'>
          Awesome, we get to see each other! We will contact you via email or
          phone to setup a time and place for you to receive your items!!!
        </p>
      )}
      <div className='order-total'>
        <p>Order Total:</p>
        <p>{`$ ${cart.reduce((acc, curr) => {
          return acc + curr.price;
        }, 0)}`}</p>
      </div>
      <div className='make-payment'>{renderPayment()}</div>
      <div className='after-payment'>
        {payment !== 'Cash' ? (
          <p>
            * You will recieve a confirmation email shortly after payment,
            please allow approximately 24 hours for email to appear. Thank you!
          </p>
        ) : null}
      </div>
    </div>
    <div id='footer'></div>
    </>
  );
};

export default Confirm;
