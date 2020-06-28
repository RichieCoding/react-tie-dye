import React, { useState } from 'react';

import './nav-menu.styles.scss';


const NavMenu = () => {
  const [active, setActive] = useState(false)

  return (
    <div className={active ? 'navigation active' : 'navigation'}>
      <div className='ham-btn' onClick={() => setActive(!active)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='links'>
        <div className='link'>
          <a href='/'>Home</a>
        </div>
        <div className='link'>
          <a href='/'>Shop</a>
        </div>
        <div className='link'>
          <a href='/'>About</a>
        </div>
        <div className='link'>
          <a href='/'>Cart</a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
