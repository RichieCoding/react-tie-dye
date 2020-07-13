import React from 'react';
import './shipping.styles.scss';
import { CartConsumer } from '../../contexts/cart';

const btnStyle = {
  background: 'black',
  color: 'white',
};

const Shipping = ({ setPage, setShipping, shipping }) => {
  const handlePage = () => {
    if (shipping) {
      setPage(1)
    }
  }
  return (
    <CartConsumer>
      {({ cart }) => (
         <div className='shipping-container'>
         <ul>
           <h3>Choose Shipping: </h3>
           <li
             style={shipping === 'Shipping' ? btnStyle : null}
             onClick={() => setShipping('Shipping')}
           >
             <div className='option'>
               <p>Standard Shipping</p>
               <p>{cart.length > 1 ? `$ 10` : `$ 5`}</p>
             </div>
           </li>
           <li
             style={shipping === 'Pickup' ? btnStyle : null}
             onClick={() => setShipping('Pickup')}
           >
             <div className='option'>
               <p>Pickup</p>
               <p>Free</p>
             </div>
           </li>
         </ul>
         <div className="page-btn">
           <button onClick={handlePage}>Next</button>
         </div>
       </div>
      )}
    </CartConsumer>
  );
};

export default Shipping;
