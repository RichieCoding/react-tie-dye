import React, { useState } from 'react'
import CheckoutBar from '../../components/CheckoutBar/CheckoutBar';
import { CartConsumer } from '../../contexts/cart';
import Shipping from '../../components/Checkout/Shipping';
import Details from '../../components/Checkout/Details';

const CheckoutPage = () => {
  const [page, setPage] = useState(0);
  const [shipping, setShipping] = useState(false);

  const options = ["Shipping", "Your Details", "Order Summary", "Confirm"];

  const renderPage = (cart) => {
    switch(page) {
      case 0:
        return <Shipping cart={cart} setShipping={setShipping} setPage={setPage} shipping={shipping}/>
      case 1: 
        return <Details shipping={shipping} setPage={setPage} />
      case 2: 
        return <h1>Order Summary</h1>
      case 3:
        return <h1>Confirm</h1>
      default:
        return <h1>Shipping</h1>
    }
  }
  return (
    <CartConsumer>
      {({ cart }) => (
        <div className='checkout-page'>
          <CheckoutBar page={page} setPage={setPage} options={options} />
          {renderPage(cart)}
        </div>
      )}
    </CartConsumer>
  )
}

export default CheckoutPage
