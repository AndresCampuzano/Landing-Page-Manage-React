import React from 'react';
import Slider from 'infinite-react-carousel';
import './styles/Carousel.scss';

// Avatars
import avatarAli from './images/avatar-ali.png';
import avatarAnisha from './images/avatar-anisha.png';
import avatarRichard from './images/avatar-richard.png';
import avatarShanai from './images/avatar-shanai.png';

const CarouselMobile = () => {
  const settings = {
    arrows: false,
    autoplay: false,
    dots: true,
    slidesToShow: 3,
    wheel: true,
    // centerPadding: 100,
    adaptiveHeight: true,
  };
  return (
    <>
      <div className='Carousel'>

        <Slider {...settings}>
          <div className='Carousel-item'>
            <div className='white'>
              <img src={avatarAli} alt='avatar Ali' />
            </div>
            <div className='Carousel-item--container'>
              <h3>Anisha Li</h3>
              <p>
                “Manage has supercharged our team’s workflow. The ability to maintain
                visibility on larger milestones at all times keeps everyone motivated.”
              </p>
            </div>
          </div>
          <div className='Carousel-item'>
            <div className='white'>
              <img src={avatarAnisha} alt='avatar Ali' />
            </div>
            <div className='Carousel-item--container'>
              <h3>Ali Bravo</h3>
              <p>
                “We have been able to cancel so many other subscriptions since using
                Manage. There is no more cross-channel confusion and everyone is much
                more focused.”
              </p>
            </div>
          </div>
          <div className='Carousel-item'>
            <div className='white'>
              <img src={avatarRichard} alt='avatar Ali' />
            </div>
            <div className='Carousel-item--container'>
              <h3>Richard Watts</h3>
              <p>
                “Manage allows us to provide structure and process. It keeps us organized
                and focused. I can’t stop recommending them to everyone I talk to!”
              </p>
            </div>
          </div>
          <div className='Carousel-item'>
            <div className='white'>
              <img src={avatarShanai} alt='avatar Ali' />
            </div>
            <div className='Carousel-item--container'>
              <h3>Shanai Gough</h3>
              <p>
                “Their software allows us to track, manage and collaborate on our projects
                from anywhere. It keeps the whole team in-sync without being intrusive.”
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default CarouselMobile;
