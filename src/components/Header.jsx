/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import Logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';
import iconClose from './images/icon-close.svg';
import './styles/Header.scss';

const Header = () => {
  const [count, setCount] = useState(2);
  console.log(count);
  return (
    <>
      <header className='Header wrapper'>
        <div className='Header-logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='Header-menuDesktop Desktop'>
          <ul>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
        <button type='button' className='normalButton Desktop'>
          Get Started
        </button>
        <div className='Mobile-menu'>
          {count & 1 ? (
            <img
              src={iconClose}
              alt='menu'
              onClick={() => setCount(count + 1)}
            />
          ) : (
            <img
              src={hamburger}
              alt='menu'
              onClick={() => setCount(count + 1)}
            />
          )}
        </div>
      </header>
      {count & 1 ? (
        <div className='Header-mobile'>
          <div className='Header-mobile--menu'>
            <ul onClick={() => setCount(count + 1)}>
              <li>Pricing</li>
              <li>Product</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Community</li>
            </ul>
          </div>
          <div
            className='Header-mobile--background'
            onClick={() => setCount(count + 1)}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
