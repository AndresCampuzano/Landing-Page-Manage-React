import React from 'react';

import Logo from './images/logo.svg';
import './styles/Header.scss';

const Header = () => {
  return (
    <>
      <header className='Header wrapper'>
        <div className='Header-logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='Header-menuDesktop'>
          <ul>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
        <div className='Header-buttonDesktop'>
          <button type='button'>Get Started</button>
        </div>
      </header>
    </>
  );
};

export default Header;
