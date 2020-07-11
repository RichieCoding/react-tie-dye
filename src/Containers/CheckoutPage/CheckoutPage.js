import React, { useState } from 'react';
import './checkout-page.styles.scss';
import CheckoutBar from '../../components/CheckoutBar/CheckoutBar';
import { CartConsumer } from '../../contexts/cart';
import Shipping from '../../components/Checkout/Shipping';
import Details from '../../components/Checkout/Details';
import OrderSummary from '../../components/Checkout/OrderSummary';
import ScrollToTop from '../../components/ScrollToTop';

const CheckoutPage = () => {
  const [page, setPage] = useState(0);
  const [shipping, setShipping] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipCode] = useState('');

  const options = ["Shipping", "Your Details", "Order Summary", "Confirm"];
  const names = [["Name", "Email", "Phone"], ["Address", "State", "City", "Zipcode"]]
  const inputNames = [[name, email, phone],[address, state, city, zipcode]]
  const handleInputs = [[setName, setEmail, setPhone],[setAddress, setState, setCity, setZipCode]]


  const renderPage = (cart) => {
    switch(page) {
      case 0:
        return <Shipping cart={cart} setShipping={setShipping} setPage={setPage} shipping={shipping}/>
      case 1: 
        return <Details shipping={shipping} setPage={setPage} inputNames={inputNames} handleInputs={handleInputs} names={names} />
      case 2: 
        return <OrderSummary cart={cart} inputNames={inputNames} setPage={setPage} shipping={shipping} />
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
