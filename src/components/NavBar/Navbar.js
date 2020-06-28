import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <header>
      <div className="nav-container">
        <div id="logo">
          <h1>ACJ</h1>
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </nav>
        <NavMenu />
      </div>
    </header>
  )
}

export default Navbar
