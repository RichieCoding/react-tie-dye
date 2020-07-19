import React from 'react';
import './checkout-bar.styles.scss';

const CheckoutBar = ({ options, page }) => {
  return (
    <div className='checkout-bar'>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            style={
              page === index ? { background: 'black', color: 'white' } : null
            }
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckoutBar;
