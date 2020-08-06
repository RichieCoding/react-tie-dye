import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';
import './footer.styles.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='logo'>
        <h3>Artsy Crafty Jassy&copy;</h3>
      </div>
      <div className='social-icons'>
        <a
          id='insta-icon'
          href='https://www.instagram.com/shopacj/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiOutlineInstagram size={25} />
        </a>
      </div>
      <div className='terms-links'>
        <a href="http://richiecoding.com" target="_blank" rel="noopener noreferrer">Website by RichieCoding</a>
        <Link to='/privacy-policy'>Privacy Policy</Link>
        <Link to='/terms-and-conditions'>Terms & Conditions</Link>
      </div>
      <div className='footer'></div>
    </div>
  );
};

export default Footer;
