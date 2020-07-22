import React from 'react';
import './about-page.styles.scss';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import FaqComponent from 'react-faq-component';

import { aboutFaq } from '../../data/aboutFaq';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="how-it-works info">
        <h2 className='about-text' id="hiw-text">How It Works</h2>
        <HowItWorks />
      </div>
      <div className="faq info">
        <h2 className='about-text' id="faq-text">F.A.Q</h2>
        <FaqComponent styles={{ bgColor: 'transparent' }} data={aboutFaq} background='transparent' />
      </div>
      <div id='footer'></div>
    </div>
  )
}

export default AboutPage
