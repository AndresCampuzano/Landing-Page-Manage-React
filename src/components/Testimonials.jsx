import React from 'react';
import './styles/Testimonials.scss';

// Avatars

// import avatarAli from './images/avatar-ali.png';
// import avatarAnisha from './images/avatar-anisha.png';
// import avatarRichard from './images/avatar-richard.png';
// import avatarShanai from './images/avatar-shanai.png';

import CarouselDesktop from './CarouselDesktop';
import CarouselMobile from './CarouselMobile';

const Testimonials = () => {
  return (
    <>
      <div className='Testimonials'>
        <h2>What they’ve said</h2>
        <div className='Testimonials-carousel'>
          <div className='Carousel-Desktop'>
            <CarouselDesktop />
          </div>
          <div className='Carousel-Mobile'>
            <CarouselMobile />
          </div>
        </div>
        <button type='button' className='normalButton'>Get Started</button>
      </div>
    </>
  );
};

export default Testimonials;
