import React from 'react';
import './styles/Testimonials.scss';

// Avatars

// import avatarAli from './images/avatar-ali.png';
// import avatarAnisha from './images/avatar-anisha.png';
// import avatarRichard from './images/avatar-richard.png';
// import avatarShanai from './images/avatar-shanai.png';

import Carousel from './Carousel';

const Testimonials = () => {
  return (
    <>
      <div className='Testimonials'>
        <h2>What they’ve said</h2>
        <div className='Testimonials-carousel'>
          <Carousel />
        </div>
        <button type='button'>Get Started</button>
      </div>
    </>
  );
};

export default Testimonials;
