import React from 'react';
import { FaCopy } from 'react-icons/fa';

import './payment-info.styles.scss';

const PaymentInfo = ({ link, logo, username }) => {
  const handleIconClick = () => {
    navigator.clipboard.writeText(username);
  }
  return (
    <div className='payment-option-container'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={logo} alt='logo' />
      </a>
      <div className='username-container'>
        <input type='text' readOnly value={username} />
        <div className='icon' onClick={handleIconClick}>
          <FaCopy />
        </div>
      </div>
    </div>
  );
};


export default PaymentInfo
