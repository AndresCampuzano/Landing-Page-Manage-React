import React from 'react';
import './styles/Hero.scss';

import imagesHero from './images/illustration-intro.svg';
import imageBackground from './images/bg-tablet-pattern.svg';

const Hero = () => {
  return (
    <>
      <div className='justBackgroundHero'>
        <img src={imageBackground} alt='background' />
      </div>
      <div className='Hero wrapper'>
        <div className='Hero-gridDesktop'>
          <div className='Hero-containerOne'>
            <div className='Hero-containerOne--text'>
              <h1>Bring everyone together to build better products.</h1>
              <p>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <button type='button'>Get Started</button>
            </div>
          </div>
          <div className='Hero-containerTwo'>
            <div className='Hero-containerTwo--images'>
              <img src={imagesHero} alt='charts' />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
