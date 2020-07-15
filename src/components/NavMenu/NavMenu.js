import React, { useState } from 'react';
import { CartConsumer } from '../../contexts/cart';
import { Link } from 'react-router-dom';
import './nav-menu.styles.scss';
import { BsBag } from 'react-icons/bs'

const NavMenu = () => {
  const [active, setActive] = useState(false);
  const handleMenuOpen = () => {
    setActive(active => !active)
    document.body.classList.toggle('active')
  }
  return (
    <CartConsumer>
      {({ cart }) => (
        <div className={active ? 'navigation active' : 'navigation'}>
          <div className='ham-btn' onClick={handleMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {active ? (
            <div className='links'>
              <div className='link'>
                <Link to='/' onClick={handleMenuOpen}>
                  Home
                </Link>
              </div>
              <div className='link'>
                <Link to='/shop' onClick={handleMenuOpen}>
                  Shop
                </Link>
              </div>
              <div className='link'>
                <Link to='/about' onClick={handleMenuOpen}>
                  About
                </Link>
              </div>
              <div className='link'>
                 <Link to='/cart' onClick={handleMenuOpen}>
                    <BsBag size={45} id='cart-icon' />
                    <p id='cart-number'>{cart.length}</p>
                  </Link>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </CartConsumer>
  );
};

export default NavMenu;
