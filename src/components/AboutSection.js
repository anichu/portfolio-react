import React from 'react';
import home1 from '../img/home1.png';
// Styled
import { About, Description, Image, Hide } from '../styles';

const AboutSection = () => {
  return (
    <About className='about'>
      <Description className='description'>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image className='image'>
        <img src={home1} alt='guy with a camera' />
      </Image>
    </About>
  );
};

// Styled Components

export default AboutSection;
