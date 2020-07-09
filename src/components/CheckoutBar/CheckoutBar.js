import React from 'react';
import './checkout-bar.styles.scss';

const CheckoutBar = ({ options, page, setPage }) => {
  return (
    <div className='checkout-bar'>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            style={
              page === index ? { background: 'black', color: 'white' } : null
            }
            onClick={() => setPage(index)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckoutBar;
