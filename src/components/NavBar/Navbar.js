import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import { CartConsumer } from '../../contexts/cart';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

const Navbar = ({ setPage }) => {
  return (
    <CartConsumer>
      {({ cart }) => (
        <header>
          <div className='nav-container'>
            <div id='logo'>
              <Link to='/'>
                <h1>ACJ</h1>
              </Link>
            </div>
            <nav className='nav-links'>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/shop'>Shop</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/cart'>{`Cart: ${cart.length}`}</Link>
                </li>
              </ul>
            </nav>
            <NavMenu />
          </div>
        </header>
      )}
    </CartConsumer>
  );
};

export default Navbar;
