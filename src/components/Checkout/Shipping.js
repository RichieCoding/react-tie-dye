import React from 'react';
import './shipping.styles.scss';

const btnStyle = {
  background: 'black',
  color: 'white',
};

const Shipping = ({ cart, setPage, setShipping, shipping }) => {
  const handlePage = () => {
    if (shipping) {
      setPage(1)
    }
  }
  return (
    <div className='shipping-container'>
      <ul>
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
  );
};

export default Shipping;
