import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import '../components/styles/global.scss';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Testimonials />
    </>
  );
};

export default App;
