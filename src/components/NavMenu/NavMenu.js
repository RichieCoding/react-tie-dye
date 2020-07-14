import React, { useState } from 'react';
import { CartConsumer } from '../../contexts/cart';
import { Link } from 'react-router-dom';
import './nav-menu.styles.scss';

const NavMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <CartConsumer>
      {({ cart }) => (
        <div className={active ? 'navigation active' : 'navigation'}>
          <div className='ham-btn' onClick={() => setActive(!active)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {active ? (
            <div className='links'>
              <div className='link'>
                <Link to='/' onClick={() => setActive(!active)}>
                  Home
                </Link>
              </div>
              <div className='link'>
                <Link to='/shop' onClick={() => setActive(!active)}>
                  Shop
                </Link>
              </div>
              <div className='link'>
                <Link to='/about' onClick={() => setActive(!active)}>
                  About
                </Link>
              </div>
              <div className='link'>
                <Link to='/cart' onClick={() => setActive(!active)}>
                  {`Cart: ${cart.length}`}
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
