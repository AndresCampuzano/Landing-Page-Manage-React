import React, { useState } from 'react';
import './styles/Footer.scss';

// Logo
import logoWhite from './images/logo-white.svg';

// Icons
import facebookIcon from './images/icon-facebook.svg';
import youtubeIcon from './images/icon-youtube.svg';
import twitterIcon from './images/icon-twitter.svg';
import pinterestIcon from './images/icon-pinterest.svg';
import instagramIcon from './images/icon-instagram.svg';

const Footer = () => {
  const [form, setValues] = useState({
    email: '',
    emailError: '',
    emailSuccessful: '',
  });

  const validateEmail = (email) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email === '' || form.email === null) {
      setValues({
        emailError: 'Please insert an email',
      });
    } else if (validateEmail(form.email) === false) {
      setValues({
        emailError: 'Please insert a valid email',
      });
    } else {
      setValues({
        emailSuccessful: 'Email sent',
      });
    }

  };

  const handleInputEmail = (e) => {
    setValues({
      email: e.target.value,
    });
  };
  return (
    <>
      <footer className='Footer desktop'>
        <div className='orange'>
          <div className='orange-container wrapper'>
            <h2>
              Simplify how your team works today.
            </h2>
            <button type='button' className='whiteFooterButton'>Get Started</button>
          </div>
        </div>
        <div className='orange-Mobile'>
          <div className='orange-container wrapper'>
            <h2>
              Simplify how your team works today.
            </h2>
            <button type='button' className='whiteFooterButton'>Get Started</button>
          </div>
        </div>
        <div className='black'>
          <div className='black-container wrapper'>
            <p className='copyright-mobile'>Copyright 2020. All Rights Reserved</p>

            <div className='logoAndSocialMedia'>
              <img className='logo-footer' src={logoWhite} alt='logo' />
              <div className='socialMedia'>
                <img src={facebookIcon} alt='facebook icon' />
                <img src={youtubeIcon} alt='youtube icon' />
                <img src={twitterIcon} alt='twitter icon' />
                <img src={pinterestIcon} alt='pinterest icon' />
                <img src={instagramIcon} alt='instagram icon' />
              </div>
            </div>
            <div className='menuOne'>
              <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>Products</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className='menuTwo'>
              <ul>
                <li>Careers</li>
                <li>Community</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className='menu-mobile-div'>
              <div className='menuOne-mobile'>
                <ul>
                  <li>Home</li>
                  <li>Pricing</li>
                  <li>Products</li>
                  <li>About Us</li>
                </ul>
              </div>
              <div className='menuTwo-mobile'>
                <ul>
                  <li>Careers</li>
                  <li>Community</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>

            <div className='formAndCopyright'>
              <form onSubmit={handleSubmit}>
                <div>
                  <input type='text' placeholder='Updates in your inbox...' onChange={handleInputEmail} id='email' />
                  <button type='submit' className='ButtonFooter'>Go</button>
                </div>
              </form>
              <span className='red'>{form.emailError}</span>
              <span className='green'>{form.emailSuccessful}</span>
              <p className='copyright-desktop'>Copyright 2020. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
