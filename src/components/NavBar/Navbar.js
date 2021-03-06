import React, { useContext } from 'react';
import NavMenu from '../NavMenu/NavMenu';
import CartContext from '../../contexts/cart';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';

import './navbar.styles.scss';

const Navbar = ({ bg }) => {
  const { cart } = useContext(CartContext);
  return (
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
            <li id="cart">
              <Link to='/cart'>
                <BsBag size={27} id='cart-icon' />
                <p id='cart-number'>{cart.length}</p>
              </Link>
            </li>
          </ul>
        </nav>
        <NavMenu bg={bg} />
      </div>
    </header>
  );
};

export default Navbar;
