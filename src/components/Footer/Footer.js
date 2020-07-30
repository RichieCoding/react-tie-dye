import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai'
import './footer.styles.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="logo">
        <h3>Artsy Crafty Jassy&copy;</h3>
      </div>
      <div className="social-icons">
        <AiOutlineInstagram size={25}/>
      </div>
      <div className="terms-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Affliations</a>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default Footer
